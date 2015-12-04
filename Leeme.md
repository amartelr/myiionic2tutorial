
# Estructura del Proyecto
http://ionicframework.com/docs/v2/getting-started/tutorial/adding-pages/

## www/index.html

Es el principal punto de entrada de la aplicación, aunque su propósito es configurar los script y CSS incluye el bootstrap (arrancar y comenzar a correr, nuestra aplicación).

Para que la aplicación ionic funcione busca la etiqueta de <ion-app> en el código HTML.

```
<ion-app></ion-app>
```


Y los siguienes scrits

```
<script src="cordova.js"></script>
```

Será 404 durante el desarrollo local, es inyectado en el proyecto durante el proceso de construcción de Córdoba.

```
 <script src="build/js/app.bundle.js"></script>
```

Es un fichero contatenado que contiene el framework de ionic, Angular y tus Javascripts de la app.


## www/app/app.js

Dentro del directorio de la app nos encontramos con nuestro código Javascript precompilado, es donde ionic2 realizará la mayor parte del trabajo.

Cuando ejecutamos **ionic serve**, nuestro código dentro de app / es transpilado a la versión correcta de Javascript que el navegador entiende (actualmente, ES5).
Eso significa que podemos trabajar en un nivel superior mediante TypeScript y ES6 +, pero se compila hasta la versión más antigua de Javascript  que el navegador necesita.


**www/app/app.js** Es el punto de entrada de nuestra aplicación.

En la parte superior del archivo, veremos lo siguiente:

```

    @App({    
      templateUrl: 'app/app.html'
    })
    class MyApp {
      constructor() {
      }
    }
```

Cada aplicación tiene un componente raíz (root) que esencialmente controla el resto de la aplicación.

Esto es muy similar a la etiqueta ng-app de ionic 1 con Angular 1. Para especificar un componente root , utilizamos el decorador de **@App**.

## www/app/app.html

Contiene la plantilla principal de la aplicación

```
<ion-menu [content]="content">

  <ion-toolbar>
    <ion-title>Pages</ion-title>
  </ion-toolbar>

  <ion-content>
    <ion-list>
      <button ion-item *ng-for="#p of pages" (click)="openPage(p)">

      </button>
    </ion-list>
  </ion-content>

</ion-menu>

<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>
```

En esta plantilla, hemos creado un **ion-menu** de tipo lateral, y luego un controlador de navegación para actuar como el principal área de contenido.


El **ion-menu** tiene una propiedad de contenido, y podemos pasar la variable local de **#contentRef** desde nuestro navegador **ion-nav**, con el fin de escuchar para arrastrar eventos en el contenido principal para saber cuando abrir y cerrar.

Menu soporta dos estilos visuales:
- overlay: Es el estilo cajón de Android tradicional.
- reveal: Es el estilo tradicional de iOS.

Por defecto, el menú se ajustará al estilo correcto para la plataforma, pero esto se puede sobreescribir utilizando la propiedad type.


Esto permitirá al menú saber qué elemento debe ser el contenido principal. La aplicación permitirá al usuario seleccionar secciones desde el menú lateral que va a cambiar lo que ven en el área de contenido. El usuario podrá navegar dentro del menú de contenidos si la sección tiene otras páginas para navegar por el.

Vamos a ir a ver cómo crear más páginas y realizar navegación básica.


# Añadiendo páginas

## app/app.html
Si nos fijamos en el fichero **app/app.html** cerca del final veremos:

```
<ion-nav #content [root]="rootPage"></ion-nav>
```

Presta atención a propiedad de Unión (binding) de [root]. Esto establece lo que es esencialmente la primera, o página "raíz" (root) para el controlador **ion-nav**. Cuando se carga el controlador de navegación, el componente que hace referenciado rootPage será la página raíz.

## app/app.js

El componente de raíz MyApp especifica esto en su constructor:

```
import {App, IonicApp, Platform} from 'ionic/ionic';
import {HelloIonicPage} from './hello-ionic/hello-ionic';
import {ListPage} from './list/list';

class MyApp {

  constructor(app: IonicApp, platform: Platform) {

    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  ...
}
```
Como ves this.rootPage es asignado a HelloIonicPage, entonces será la primera página cargada en el controlador de navegación.

La página de raíz es la primera página que se podrá ver en su aplicación. Para cambiar las vistas en una aplicación de la versión ionic 2 usted puede cambiar esta página raíz, o realizar push y pop de las vistas. Empujar (Pushing) una vista cambiará a ese punto de vista, y hacer Popoing será quitarlo y volver a la vista anterior. Usted puede push una vista, luego haga otra vista, y otro punto de vista y entonces usted será capaz de navegar de vuelta a través de ellos con el botón generada automáticamente "Volver" o haciendo estallar manualmente los puntos de vista en el código de aplicación.

## Convenciones de nombres

Usted puede haber notado que cada página tiene su propia carpeta que lleva el nombre de la página. Dentro de cada carpeta, también vemos un .html y un archivo .scss con el mismo nombre. Por ejemplo, dentro de **hello-ionic/** encontraremos **hello-ionic.js**, **hello-ionic.html**, and **hello-ionic.scss**. Aunque no es necesario usar este patrón, puede ser útil mantener las cosas organizadas.


## Creando una página


Lo siguiente, es observar  HelloIonicPage que estamos importando. Dentro de la carpeta **app/hello-ionic/** , el contenido de  **hello-ionic.js**.

```
import {Page, NavController} from 'ionic/ionic';

@Page({
  templateUrl: 'app/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
```
Observa que pasamos en el objeto de navegación (nav) y establecemos como una propiedad en el contructor.

Todas las páginas tienen una clase y una plantilla asociada. Vamos a **app/hello-ionic/hello-ionic.html**  - la plantilla de archivo de esta página:

```
<ion-navbar *navbar>
  <a menu-toggle>
    <icon menu></icon>
  </a>
  <ion-title>Hello Ionic</ion-title>
</ion-navbar>

<ion-content padding class="getting-started">

  <h3>Welcome to your first Ionic app!</h3>

  <p>
    This starter project is our way of helping you get a functional app running in record time.
    ...
  </p>
</ion-content>
```
El componente  `<ion-navbar *navbar>` contiene configuración y datos de la barra de navegación. Como navegamos a la página, la barra de navegación se actualiza con la

los `ion-nav-items` para los botones (buttons) en la barra (bar), y `<ion-title>` para el título de la barra.
El resto de la plantilla es  código estándar que establece nuestra área de contenido y, a continuación,hace que nuestro mensaje de bienvenida.

## Creando una página adicional

Para crear una página adicional, no necesitamos hacer mucho más allá de asegurarse de configurar correctamente el título y nada más queremos que la barra de navegación para mostrar.

### app/list/list.js

```
import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'app/list/list.html'
})
export class ListPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    ...
   }
   ...
   itemTapped(event, item) {
     console.log('You selected', item.title);
   }
}
```

Esta página creará una página de la lista básica que contiene un número de elementos. Tenga en cuenta que también estamos definiendo una función de itemTapped que registra el título de un item a la consola. Vamos echa un vistazo de cómo se llama esta función. Abrir el app/list/list.html:

` <ion-item *ng-for="#item of items" (click)="itemTapped($event, item)"> `

Esto agregará cada elemento a la lista, y registrar un controlador de clic en cada uno de esos elementos. Cuando el item se toca o se hace clic, se llamará a nuestra función **itemTapped** que registra el título del tema a la consola. También tenga en cuenta que pasamos esta función el evento click, así como el item que fue intervenido.

En general, esta página es muy similar a la HelloIonicPage hemos visto anteriormente. Actualmente, cuando se toca un elemento, nuestra aplicación registrará un mensaje a la consola. En la siguiente sección, vamos a aprender acerca de cómo podemos mejorar esta navegando a una nueva página!


# Navegando por páginas
Recordemos de la sección anterior que tenía una función dentro de nuestra clase **ListPage** que algo como esto:

```
itemTapped(event, item) {
    console.log('You selected:', item.title);
}
```

Vamos a mejorar de modo que se desplaza a una nueva página:


```
itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
}
```
Habrás notado que estamos haciendo referencia a **ItemDetailsPage**. Se trata de una página incluida en el arrancador del tutorial. la Importamos en app/list/list.js para poderla usar:

```
...
import {ItemDetailsPage} from '../item-details/item-details';
```

Después de guardar el archivo, observará que el proceso **ionic serve** compilará su aplicación con los cambios y volverá a cargar el navegador. Vamos a revisar nuestra aplicación en el navegador, y cuando nos toque un elemento, navegará a la página de detalles del artículo.

# Como funciona la navegación

la Navegación en ionic 2 funciona como una pila simple, donde empujamos **push** nuevas páginas en la parte superior de la pila, que nos remite en la aplicación y muestra un botón de retroceso.
Para ir hacia atrás, nosotro **pop**  la página superior. Desde seleccionamos **this.nav** en el constructor, podemos llamar **this.nav.push()** y se pasarle la pagina que queremos navegar. También lo podemos pasar un objeto que contiene datos que nos gustaría pasar a la página que se navega. Usando **push** para navegar a una nueva página es simple, pero el sistema de navegación de ionic es muy flexible.

Cuando se trata de la URL,  ionic 2 funciona un poco diferente a la versión  1. En lugar de utilizar direcciones URL para navegar, los utilizamos para asegurarse de que siempre podemos llegar a una página (en el lanzamiento de la aplicación, por ejemplo). Esto quiere decir que no no se limitan al uso de 'href' para navegar por. Sin embargo, todavía tenemos la opción de utilizar una URL para navegar a una página cuando sea necesario.


# Enlaces

http://ionicframework.com/docs/v2/components/
http://ionicframework.com/docs/v2/platform/
http://ionicframework.com/docs/v2/resources/
https://forum.ionicframework.com/
https://github.com/driftyco/ionic2/tree/master/demos


We can generate templates files from the ionic commmand line

ionic generate --list
ionic generate page page-list
ionic generate page page-icon

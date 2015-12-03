import {App, IonicApp, Platform} from 'ionic/ionic';
import {HelloIonicPage} from './hello-ionic/hello-ionic';
import {ListPage} from './list/list';
import {AnimationPage} from './page-animation/page-animation';

import "./app.scss";


@App({
  templateUrl: 'app/app.html'
})

class MyApp {
  constructor(app: IonicApp, platform: Platform) {

    // configura nuestra aplicación
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    // configura las páginas de nuestra aplicación
    this.pages = [
      { title: 'Hola Ionic2', component: HelloIonicPage },
      { title: 'Mi Primera Lista', component: ListPage },
      { title: 'Animation Page', component: AnimationPage}
    ];

    // Establece HelloIonicPage la raíz (o primera) página
    this.rootPage = HelloIonicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
/*
La plataforma ya está lista. Nota: Si esta devolución de llamada no se ejecuta, siga
la guía de solución de problemas para un número de posibles soluciones:
Si está bien, la plataforma está lista y nuestros plugins están disponibles.
Aquí usted puede hacer cualquier cosas nativas nivel superiores puede que necesite.
En primer lugar, vamos a ocultar la barra del accesorio de teclado (sólo funciona nativamente) puesto que
es un defecto mejor:
Por ejemplo, podríamos cambiar el color de la barra de estado. A continuación es
bueno para luz de fondo y texto oscuro;
*/

      if (typeof StatusBar !== 'undefined') {
        StatusBar.styleDefault();
      }
    });
  }

  openPage(page) {
    // Cierra el menú al hacer clic en un enlace en el menú
    this.app.getComponent('menu').close();
    // navegar a la nueva página si no es la página actual
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}

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

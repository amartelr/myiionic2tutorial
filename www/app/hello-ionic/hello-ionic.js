import {Page, NavController} from 'ionic/ionic';
import {Translate, TranslatePipe} from 'ionic/ionic';

import "./hello-ionic.scss";

@Page({
  templateUrl: 'app/hello-ionic/hello-ionic.html',
  pipes: [TranslatePipe]
})
export class HelloIonicPage {

  constructor(nav: NavController, trans: Translate) {
    this.nav = nav;
    console.log("nav id. " + nav.id)
    this.title = "Hola Ionic2";
    this.trans = trans;

    this.trans.translations('es', {
     'Location': 'Localizacion'

  });

  console.log(this.trans.translate('Location'));
  console.log(this.trans.translate('Location', 'es'));
  this.trans.setLanguage('es');
  console.log(this.trans.translate('Location'));

  }
  blur() {
  }
}

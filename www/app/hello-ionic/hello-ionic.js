import {Component, Control, ControlGroup} from 'angular2/angular2';
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
    this.title = "Hola Ionic2";
    this.trans = trans;

    this.trans.translations('es', {
     'Location': 'Localizacion'
  });

  console.log(this.trans.translate('Location'));
  console.log(this.trans.translate('Location', 'es'));
  //this.trans.setLanguage('de');
  console.log(this.trans.translate('Location'));
  }
  blur() {
  }
}

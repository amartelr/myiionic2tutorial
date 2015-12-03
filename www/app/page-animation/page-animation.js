import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import "./page-animation.scss";

@Page({
  templateUrl: 'app/page-animation/page-animation.html'
})

export class Animation {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // Si navegamos a esta página, vamos a tener un item disponible como un parámetro de navegación
    // this.selectedItem = navParams.get('item');
  }
}

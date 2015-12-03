import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import "./animation.scss";

@Page({
  templateUrl: 'app/animation/animation.html'
})

export class Animation {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // Si navegamos a esta página, vamos a tener un item disponible como un parámetro de navegación
    // this.selectedItem = navParams.get('item');
  }
}

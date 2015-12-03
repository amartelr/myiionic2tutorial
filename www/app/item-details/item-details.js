import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import "./item-details.scss";

@Page({
  templateUrl: 'app/item-details/item-details.html'
})
export class ItemDetailsPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // Si navegamos a esta página, vamos a tener un item disponible como un parámetro de navegación
    this.selectedItem = navParams.get('item');
  }
}

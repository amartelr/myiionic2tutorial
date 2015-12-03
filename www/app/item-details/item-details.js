import { Page, NavController, NavParams} from 'ionic/ionic';

import "./item-details.scss";

@Page({
  templateUrl: 'app/item-details/item-details.html'
})
export class ItemDetailsPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    console.log("nav id. " + nav.id)
    // Si navegamos a esta página, vamos a tener un item disponible como un parámetro de navegación
    this.selectedItem = navParams.get('item');
  }
}

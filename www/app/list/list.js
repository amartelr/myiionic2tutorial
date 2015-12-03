import {Page, NavController, NavParams} from 'ionic/ionic';
import {ItemDetailsPage} from '../item-details/item-details';

@Page({
  templateUrl: 'app/list/list.html'
})
export class ListPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    console.log("nav id. " + nav.id)
    // Si navegamos a esta página, vamos a tener un item disponible como un parámetro de navegación
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'Esto es el #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {

    // console.log('You selected:', item.title);

      this.nav.push(ItemDetailsPage, {
        item: item
      });
  }
}

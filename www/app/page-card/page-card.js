import {Page, NavController} from 'ionic/ionic';

@Page({
  templateUrl: 'app/page-card/page-card.html'
})

export class CardPage {
  constructor( nav: NavController) {
    this.nav = nav;
    this.title = "Card Page";
}
}

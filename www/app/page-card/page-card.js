import {Page, NavController} from 'ionic/ionic';

@Page({
  templateUrl: 'app/page-card/page-card.html'
})

export class CardPage {
  constructor( nav: NavController) {
    this.nav = nav;
    console.log("nav id. " + nav.id)
    this.title = "Card Page";
}
}

import {Page, NavController} from 'ionic/ionic';

@Page({
  templateUrl: 'app/page-button/page-button.html'
})

export class ButtonPage {
  constructor( nav: NavController) {
    this.nav = nav;
    console.log("nav id. " + nav.id)
    this.title = "Button Page";
}
}

import {Page, NavController, Animation} from 'ionic/ionic';

@Page({
  templateUrl: 'app/page-button/page-button.html'
})

export class ButtonPage {
  constructor( nav: NavController) {
    this.nav = nav;
    this.title = "Button Page";
}
}

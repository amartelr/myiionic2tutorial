import {Page, NavController, Animation} from 'ionic/ionic';

@Page({
  templateUrl: 'app/page-blank/page-blank.html'
})

export class BlankPage {
  constructor( nav: NavController) {
    this.nav = nav;
    this.title = "Blank Page";
}
}

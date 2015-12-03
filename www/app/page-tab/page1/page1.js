import {Page, NavController} from 'ionic/ionic';


@Page({
  templateUrl: 'app/page-tab/page1/page1.html',
})
export class Page1 {
  constructor(nav: NavController) {
     this.nav = nav;
     console.log("nav id. " + nav.id)
     this.title = "Page 1";
  }
}

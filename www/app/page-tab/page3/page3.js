import {Page, NavController} from 'ionic/ionic';


@Page({
  templateUrl: 'app/page-tab/page3/page3.html'
})
export class Page3 {
   constructor(nav: NavController) {
      this.nav = nav;
      console.log("nav id. " + nav.id)
      this.title = "Page 3";
   }
}

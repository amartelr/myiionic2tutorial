import {Page} from 'ionic/ionic';


@Page({
  templateUrl: 'app/page-tab/page3/page3.html'
})
export class Page3 {
   constructor(nav: NavController) {
      this.nav = nav;
      this.title = "Page 3";
   }
}

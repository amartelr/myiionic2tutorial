import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/page-tab/page2/page2.html',
})
export class Page2 {
   constructor(nav: NavController) {
      this.nav = nav;
      this.title = "Page 2";
   }
}

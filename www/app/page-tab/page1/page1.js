import {Page} from 'ionic/ionic';


@Page({
  templateUrl: 'app/page-tab/page1/page1.html',
})
export class Page1 {
  constructor(nav: NavController) {
     this.nav = nav;
     this.title = "Page 1";
  }
}

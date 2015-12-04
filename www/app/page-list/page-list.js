import {Page, NavController} from 'ionic/ionic';
@Page({
  templateUrl: 'app/page-list/page-list.html',
})
export class PageList {
  constructor(nav: NavController) {
    this.nav = nav;
    this.title = "List Page";
  }
}

import {Page, NavController, Animation} from 'ionic/ionic';
import {Page1} from './page1/page1';
import {Page2} from './page2/page2';
import {Page3} from './page3/page3';

@Page({
  templateUrl: 'app/page-tab/page-tab.html'
})

export class TabPage {
  constructor( nav: NavController) {
    this.nav = nav;
    this.title = "Tab Page";
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
}
}

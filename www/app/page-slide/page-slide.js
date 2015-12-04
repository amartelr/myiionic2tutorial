import {Page, NavController} from 'ionic/ionic';
@Page({
  templateUrl: 'app/page-slide/page-slide.html',
})


export class PageSlide {
  constructor(nav: NavController) {
    this.nav = nav;
   this.title = "Slide Page";
   this.extraOptions = {
      loop: true
    };
  }
}

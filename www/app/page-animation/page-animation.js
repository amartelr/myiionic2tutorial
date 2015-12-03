import {Page, NavController, Animation} from 'ionic/ionic';

import "./page-animation.scss";

@Page({
  templateUrl: 'app/page-animation/page-animation.html'
})

export class AnimationPage {
  constructor( nav: NavController) {
    this.nav = nav;
    this.title = "Animation Page";

    this.animation = new Animation();
       this.animation
         .duration(2000)

       var ionitronSpin = new Animation(document.querySelector('#ionitron'));
       ionitronSpin
         .from('transform', 'rotate(0deg)')
         .to('transform', 'rotate(360deg)')

       this.animation.add(ionitronSpin);

       this.animation.onReady(animation => {
         console.log('onReady', animation);
       });

       this.animation.onPlay(animation => {
         console.log('onPlay', animation);
       });

       this.animation.onFinish(animation => {
         console.log('onFinish', animation);
       });
  }
   play() {
      this.animation.play();
    }

    pause() {
      this.animation.pause();
    }

    progress(ev) {
      this.animation.progress( parseFloat(ev.srcElement.value) );
    }

}

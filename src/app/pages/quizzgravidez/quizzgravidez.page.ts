import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-quizzgravidez',
  templateUrl: './quizzgravidez.page.html',
  styleUrls: ['./quizzgravidez.page.scss'],
})
export class QuizzgravidezPage implements OnInit {
  @ViewChild('slide') slide;
  
  slideOpts = {
    effect: 'flip'
  };

  constructor() { }

  ngOnInit() {
  }

  nextSlide(){
    this.slide.slideNext();
  }
  
  backSlide(){
    this.slide.slidePrev();
  }

  sliderEnd(evt){
    console.log('end')
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  @ViewChild('slide') slide;

  slideOpts = {
    effect: 'flip'
  };

  radio: string = "";
  dum: Date;

  constructor() { }

  ngOnInit() {
  }

  sliderEnd(evt){
    console.log('end')
  }

  changeRadio(evt){
    this.radio = evt.detail.value

  }

  nextSlide(){
    this.slide.slideNext();
  }
  
  backSlide(){
    this.slide.slidePrev();
  }
}

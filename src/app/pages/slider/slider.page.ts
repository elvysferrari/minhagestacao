import { GestacaoService } from './../../services/gestacao.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { DocumentosService } from 'src/app/services/documentos.service';

const intersticalConfig: AdMobFreeInterstitialConfig = {
  // add your config here
  // for the sake of this example we will just use the test config
   id: 'ca-app-pub-4358080998486510/4010620718',
  isTesting: false,
  autoShow: true
};
@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  @ViewChild('slide') slide;
  @ViewChild('datetime') date;
  slideOpts = {
    effect: 'flip'
  };

  radio: string = "";
  dum: Date;
  idadeGestacional: string = "";
  dppFromDum: Date;
  disableButton = true;
  constructor(private router: Router,
    private gestacaoService: GestacaoService,
    private alertController: AlertController,
    private docsService: DocumentosService,
    private admobFree: AdMobFree) { }

  ngOnInit() {
    this.slide.lockSwipes(true);
  }

  sliderEnd(evt) {
    this.admobFree.interstitial.config(intersticalConfig);
    this.admobFree.interstitial.prepare()
      .then(() => {
        this.docsService.clearBannerOpen(-5);
      })
      .catch(e => alert(e));
  }

  changeRadio(evt) {
    this.radio = evt.detail.value
    this.disableButton = false;
  }

  async nextSlide() {
    this.slide.lockSwipes(false);
    let next = false;

    let formatedDum = ""
    if (this.radio == "manual") {
      if (this.date.value !== "") {
        let dum = new Date(this.date.value);
        formatedDum = dum.getDate() + "/" + (dum.getMonth() + 1) + "/" + dum.getFullYear();
        next = true;
      }
    } else if (this.radio == "empty") {
      let date = new Date();
      let date2 = date.setTime(date.getTime() - (7 * 24 * 60 * 60 * 1000));
      let dum = new Date(date2);
      formatedDum = dum.getDate() + "/" + (dum.getMonth() + 1) + "/" + dum.getFullYear();
      next = true;
    } else if (this.radio == "oneWeek") {
      let date = new Date();
      let date2 = date.setTime(date.getTime() - (14 * 24 * 60 * 60 * 1000));
      let dum = new Date(date2);

      formatedDum = dum.getDate() + "/" + (dum.getMonth() + 1) + "/" + dum.getFullYear();
      next = true;
    } else if (this.radio == "twoWeek") {
      let date = new Date();
      let date2 = date.setTime(date.getTime() - (30 * 24 * 60 * 60 * 1000));
      let dum = new Date(date2);

      formatedDum = dum.getDate() + "/" + (dum.getMonth() + 1) + "/" + dum.getFullYear();
      next = true;
    }

    if (formatedDum != "") {
      let idade = this.gestacaoService.getIdadeGestacional(formatedDum, "", "");
      this.idadeGestacional = idade;

      let dpp = this.gestacaoService.getDppFromDate(formatedDum, "");
      this.dppFromDum = dpp;

      if (next) {
        this.slide.slideNext();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Data inválida.',
        subHeader: '',
        message: 'Por favor, informe uma data válida.',
        buttons: ['OK']
      });

      await alert.present();
    }

  }

  backSlide() {
    this.slide.slidePrev();
  }

  goHome() {
    this.router.navigateByUrl('/home')
  }
}

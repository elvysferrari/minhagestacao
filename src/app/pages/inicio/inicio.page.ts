import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

const bannerConfig: AdMobFreeBannerConfig = {
  // add your config here
  // for the sake of this example we will just use the test config
  /* id: 'ca-app-pub-4358080998486510/3535669536', */
  isTesting: true,
  autoShow: true
};

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private storage: Storage, private router: Router, private admobFree: AdMobFree) {
    setTimeout(() =>{
      admobFree.banner.config(bannerConfig);

      admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => alert(e));
    }, 1000)
    
  }

  ngOnInit() {
  }

  openSliderPage() {
    this.router.navigateByUrl('/slider')
  }

  openSliderQuizzPage() {
    this.router.navigateByUrl('/quizzgravidez')
  }

  openListaDocs() {
    this.router.navigateByUrl('/lista-documentos')
  }
}

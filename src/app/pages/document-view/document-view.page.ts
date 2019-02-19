import { DocumentoModelo } from './../../models/documentoModelo';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

const intersticalConfig: AdMobFreeInterstitialConfig = {
  // add your config here
  // for the sake of this example we will just use the test config
   id: 'ca-app-pub-4358080998486510/8666011597',
  isTesting: false,
  autoShow: true
};
@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.page.html',
  styleUrls: ['./document-view.page.scss'],
})
export class DocumentViewPage implements OnInit {
  id: number;
  documento: DocumentoModelo;

  constructor(private route: ActivatedRoute,
              private documentService: DocumentosService,
              private admobFree: AdMobFree) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.documento = this.documentService.getDocById(this.id);
    
    let bannerOpen =  this.documentService.getBannerOpen();
    if (bannerOpen >= 4) {
      setTimeout(() =>{
        this.admobFree.interstitial.config(intersticalConfig);
        this.admobFree.interstitial.prepare()
          .then(() => {
            this.documentService.clearBannerOpen();
          })
          .catch(e => alert(e));
      }, 2000)
     
    }else{
      this.documentService.setBannerOpen();
    }
  }

}

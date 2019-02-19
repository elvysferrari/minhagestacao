import { DocumentoModelo } from './../../models/documentoModelo';
import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

const intersticalConfig: AdMobFreeInterstitialConfig = {
  // add your config here
  // for the sake of this example we will just use the test config
 /*  id: 'ca-app-pub-4358080998486510/8666011597', */
  isTesting: true,
  autoShow: false
};

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.page.html',
  styleUrls: ['./lista-documentos.page.scss'],
})
export class ListaDocumentosPage implements OnInit {
  documentos: DocumentoModelo[];
  documentosFiltered: DocumentoModelo[] = [];
  constructor(private docsService: DocumentosService,private admobFree: AdMobFree) {
    
   }

  ngOnInit() {
    this.documentos = this.docsService.getDocumentList();
    this.documentosFiltered = this.docsService.getDocumentList();

    this.documentos.sort((a: any, b: any) => {
      return a.titulo < b.titulo ? -1 : 1;
    });

    this.documentosFiltered.sort((a: any, b: any) => {
      return a.titulo < b.titulo ? -1 : 1;
    });
    setTimeout(() =>{
      this.admobFree.interstitial.config(intersticalConfig);

      this.admobFree.interstitial.prepare()
        .then(() => {
          let time = new Date().getMinutes() - this.docsService.getBannerTime();
          alert(time)
          if(time >= 5){
            this.docsService.setBannerTime();
            this.admobFree.banner.hide();
            this.admobFree.interstitial.show();
          }
         // this.admobFree.interstitial.show();
        })
        .catch(e => alert(e));
    }, 1000)
  }

  changeSearch(evt){
    alert(this.docsService.getBannerTime())
    alert(new Date().getMinutes())
    console.log('changeSearch', evt);    
    if(evt.detail.value == ""){
      this.documentosFiltered = this.documentos;
    }else{
      this.documentosFiltered = this.documentos.filter(x => x.titulo.toLocaleLowerCase().includes(evt.detail.value.toLocaleLowerCase()));
    }
  }

  cancelSearch(evt){
    this.documentosFiltered = this.documentos;
  }
}

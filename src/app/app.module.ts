import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
import { QuizzgravidezService } from './services/quizzgravidez.service';
import { GestacaoService } from './services/gestacao.service';
import { DocumentosService } from './services/documentos.service';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,    
    IonicStorageModule.forRoot()
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QuizzgravidezService,
    GestacaoService,
    DocumentosService,
    AdMobFree
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

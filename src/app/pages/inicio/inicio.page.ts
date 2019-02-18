import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  openSliderPage(){
    this.router.navigateByUrl('/slider')
  }

  openSliderQuizzPage(){
    this.router.navigateByUrl('/quizzgravidez')
  }

  openListaDocs(){
    this.router.navigateByUrl('/lista-documentos')
  }
}

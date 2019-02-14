import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaServicosTabPage } from './lista-servicos-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ListaServicosTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaServicosTabPage]
})
export class ListaServicosTabPageModule {}

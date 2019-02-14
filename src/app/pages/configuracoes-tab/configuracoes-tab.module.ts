import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfiguracoesTabPage } from './configuracoes-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfiguracoesTabPage]
})
export class ConfiguracoesTabPageModule {}

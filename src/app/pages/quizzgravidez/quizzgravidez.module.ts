import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuizzgravidezPage } from './quizzgravidez.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzgravidezPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizzgravidezPage]
})
export class QuizzgravidezPageModule {}

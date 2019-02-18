import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DocumentViewPage } from './document-view.page';
import { SanitizeOff } from 'src/app/pipes/noSanitize.pipe';


const routes: Routes = [
  {
    path: '',
    component: DocumentViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DocumentViewPage, 
    SanitizeOff
  ]
})
export class DocumentViewPageModule {}

import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'category-list',
        children: [
          {
            path: '',
            //loadChildren: '../lista-servicos-tab/lista-servicos-tab.module#ListaServicosTabPageModule'
            loadChildren: '../category-list/category-list.module#CategoryListPageModule'
          }
        ]
      },
      {
        path: 'configuracoes-tab',
        children: [
          {
            path: '',
            loadChildren: '../configuracoes-tab/configuracoes-tab.module#ConfiguracoesTabPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/category-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/category-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

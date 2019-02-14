import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            //loadChildren: '../lista-servicos-tab/lista-servicos-tab.module#ListaServicosTabPageModule'
            loadChildren: '../inicio/inicio.module#InicioPageModule'
          }
        ]
      },
      {
        path: 'mais',
        children: [
          {
            path: '',
            loadChildren: '../mais/mais.module#MaisPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/inicio',
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

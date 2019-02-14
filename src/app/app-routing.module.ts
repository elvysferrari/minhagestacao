import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },   
  { path: 'slider', loadChildren: './pages/slider/slider.module#SliderPageModule' },  { path: 'quizzgravidez', loadChildren: './pages/quizzgravidez/quizzgravidez.module#QuizzgravidezPageModule' },

  
  /* { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },   
  { path: 'mais', loadChildren: './pages/mais/mais.module#MaisPageModule' } */

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

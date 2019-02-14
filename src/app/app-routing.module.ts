import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },   { path: 'category-list', loadChildren: './pages/category-list/category-list.module#CategoryListPageModule' },
  { path: 'categories/:id', loadChildren: './pages/lista-servicos-tab/lista-servicos-tab.module#ListaServicosTabPageModule' },   { path: 'category-list', loadChildren: './pages/category-list/category-list.module#CategoryListPageModule' }
 
//{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

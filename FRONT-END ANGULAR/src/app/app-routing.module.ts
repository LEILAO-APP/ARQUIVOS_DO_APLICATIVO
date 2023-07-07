import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nova',
    loadChildren: () => import('./nova/nova.module').then( m => m.NovaPageModule)
  },
  {
    path: 'eletrodomesticos',
    loadChildren: () => import('./eletrodomesticos/eletrodomesticos.module').then( m => m.EletrodomesticosPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('./casa/casa.module').then( m => m.CasaPageModule)
  },
  {
    path: 'acessorios',
    loadChildren: () => import('./acessorios/acessorios.module').then( m => m.AcessoriosPageModule)
  },
  {
    path: 'beleza',
    loadChildren: () => import('./beleza/beleza.module').then( m => m.BelezaPageModule)
  },
  {
    path: 'informatica',
    loadChildren: () => import('./informatica/informatica.module').then( m => m.InformaticaPageModule)
  },
  {
    path: 'lancar',
    loadChildren: () => import('./lancar/lancar.module').then( m => m.LancarPageModule)
  },
  {
    path: 'ferramentas',
    loadChildren: () => import('./ferramentas/ferramentas.module').then( m => m.FerramentasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'criar',
    loadChildren: () => import('./criar/criar.module').then( m => m.CriarPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

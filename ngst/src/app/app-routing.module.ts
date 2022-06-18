import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ApodComponent} from "@app/components/apod/apod.component";

const routes: Routes = [
  // BASE
  {
    path: '',
    redirectTo: 'apod',
    pathMatch: 'full'
  },

  // CUSTOM
  {
    path: 'apod',
    pathMatch: 'full',
    loadChildren: () => import('./pages/apod/apod.module').then( m => m.ApodPageModule)
  },
  {
    path: 'randomApod',
    pathMatch: 'full',
    loadChildren: () => import('./pages/random/random.module').then( m => m.RandomPageModule)
  },
  {
    path: 'apodDate',
    pathMatch: 'full',
    loadChildren: () => import('./pages/apod-by-date/apod-by-date.module').then( m => m.ApodByDatePageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

  // ALWAYS THE LAST ONE !!!
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

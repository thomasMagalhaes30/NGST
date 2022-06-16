import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApodByDatePage } from './apod-by-date.page';

const routes: Routes = [
  {
    path: '',
    component: ApodByDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApodByDatePageRoutingModule {}

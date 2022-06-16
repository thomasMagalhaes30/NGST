import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApodByDatePageRoutingModule } from './apod-by-date-routing.module';

import { ApodByDatePage } from './apod-by-date.page';
import {ApodComponent} from '../../components/apod/apod.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApodByDatePageRoutingModule
  ],
  declarations: [ApodByDatePage, ApodComponent],
  exports: [ ApodComponent ]
})
export class ApodByDatePageModule {}

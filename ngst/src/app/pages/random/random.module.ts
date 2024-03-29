import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomPageRoutingModule } from './random-routing.module';

import { RandomPage } from './random.page';

import {ApodComponent} from '@app/components/apod/apod.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomPageRoutingModule
  ],
  declarations: [RandomPage, ApodComponent],
  exports: [ApodComponent]
})
export class RandomPageModule {}

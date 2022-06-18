import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApodPageRoutingModule } from './apod-routing.module';

import { ApodPage } from './apod.page';
import {ApodComponent} from "@app/components/apod/apod.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApodPageRoutingModule
  ],
  declarations: [ApodPage, ApodComponent],
  exports: [ ApodComponent ]
})
export class ApodPageModule {}

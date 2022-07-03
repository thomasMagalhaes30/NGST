import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationPageRoutingModule } from './information-routing.module';

import { InformationPage } from './information.page';
import { AuthorComponent } from '../../components/author/author.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationPageRoutingModule
  ],
  declarations: [InformationPage, AuthorComponent],
  exports: [ AuthorComponent ]
})
export class InformationPageModule {}

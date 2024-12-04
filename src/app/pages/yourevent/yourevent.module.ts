import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoureventPageRoutingModule } from './yourevent-routing.module';

import { YoureventPage } from './yourevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoureventPageRoutingModule
  ],
  declarations: [YoureventPage]
})
export class YoureventPageModule {}

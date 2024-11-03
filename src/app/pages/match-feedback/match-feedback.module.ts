import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchFeedbackPageRoutingModule } from './match-feedback-routing.module';

import { MatchFeedbackPage } from './match-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchFeedbackPageRoutingModule
  ],
  declarations: [MatchFeedbackPage]
})
export class MatchFeedbackPageModule {}

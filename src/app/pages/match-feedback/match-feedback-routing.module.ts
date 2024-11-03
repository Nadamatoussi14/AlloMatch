import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchFeedbackPage } from './match-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: MatchFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchFeedbackPageRoutingModule {}

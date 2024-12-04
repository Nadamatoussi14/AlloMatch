import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoureventPage } from './yourevent.page';

const routes: Routes = [
  {
    path: '',
    component: YoureventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoureventPageRoutingModule {}

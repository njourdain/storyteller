import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import routeConfig from './route-config';


@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule, RouterOutlet]
})
export class AppRoutingModule { }

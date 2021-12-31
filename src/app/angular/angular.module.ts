import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { IconForAngularComponent } from '../icon-for-angular/icon-for-angular.component';


@NgModule({
  declarations: [
    AngularComponent,
    IconForAngularComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }

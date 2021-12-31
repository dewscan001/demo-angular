import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloworldRoutingModule } from './helloworld-routing.module';
import { HelloworldComponent } from './helloworld.component';


@NgModule({
  declarations: [
    HelloworldComponent,
  ],
  imports: [
    CommonModule,
    HelloworldRoutingModule
  ]
})
export class HelloworldModule { }

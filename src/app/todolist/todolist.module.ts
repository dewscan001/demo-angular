import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist.component';

import {DragDropModule} from '@angular/cdk/drag-drop';

import { ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    TodolistComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    DragDropModule,
    ReactiveFormsModule
  ]
})
export class TodolistModule { }

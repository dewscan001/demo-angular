import { Component, OnInit } from '@angular/core';
import { TodolistService } from './todolist.service';
import { FormBuilder  } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(
    private service: TodolistService,
    private form: FormBuilder,
  ) {
  }

  todo = this.service.getTodo();
  doing = this.service.getDoing();
  done = this.service.getDone();

  form_add_list = this.form.group({
    name: '',
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form_add_list.value.name) {
      this.addToList(this.form_add_list.value.name)
    }
    this.form_add_list.reset()
  }

  addToList(name: string) {
    this.service.addToList(name);
  }

  addToDoing(name: string) {
    this.service.addToDoing(name);
  }

  addToDone(name: string) {
    this.service.addToDone(name);
  }

  removeFromList(index: number) {
    this.service.removeFromList(index);
  }

  removeFromDoing(index: number) {
    this.service.removeFromDoing(index);
  }

  removeFromDone(index: number) {
    this.service.removeFromDone(index);
  }

  updateDrop() {
    this.service.updateDrop();
  }

  clear() {
    this.service.clear();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.updateDrop()
  }

}

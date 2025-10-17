import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TodolistService {

  constructor() { }

  todo: string[] = localStorage.getItem("Todo") ? localStorage.getItem("Todo")!.split(",") : [];
  doing: string[] = localStorage.getItem("Doing") ? localStorage.getItem("Doing")!.split(",") : [];
  done: string[] = localStorage.getItem("Done") ? localStorage.getItem("Done")!.split(",") : [];
  /* . . . */

  addToList(todolist:string) {
    this.todo.push(todolist);
    localStorage.setItem('Todo', this.todo.toString());
  }

  addToDoing(doinglist: string) {
    this.doing.push(doinglist);
    localStorage.setItem('Doing', this.doing.toString());
  }

  addToDone(donelist: string) {
    this.done.push(donelist);
    localStorage.setItem('Done', this.done.toString());
  }

  removeFromList(index:number) {
    this.todo.splice(index, 1)
    localStorage.setItem('Todo', this.todo.toString());
  }

  removeFromDoing(index: number) {
    this.doing.splice(index, 1);
    localStorage.setItem('Doing', this.doing.toString());
  }

  removeFromDone(index: number) {
    this.done.splice(index, 1);
    localStorage.setItem('Done', this.done.toString());
  }

  updateDrop() {
    localStorage.setItem('Todo', this.todo.toString());
    localStorage.setItem('Doing', this.doing.toString());
    localStorage.setItem('Done', this.done.toString());
  }

  getTodo() {
    return this.todo;
  }

  getDoing() {
    return this.doing;
  }

  getDone() {
    return this.done;
  }

  clear() {
      localStorage.removeItem('Todo');
      localStorage.removeItem('Doing');
      localStorage.removeItem('Done');
      this.todo = []
      this.doing = []
      this.done = []
      location.reload()
    }
  /* . . . */
}

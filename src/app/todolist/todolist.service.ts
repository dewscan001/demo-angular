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

  removeFromList(todolist:string) {
    this.todo = this.todo.filter(item => item != todolist);
    localStorage.setItem('Todo', this.todo.toString());
  }

  removeFromDoing(doinglist: string) {
    this.doing = this.doing.filter(item => item != doinglist);
    localStorage.setItem('Doing', this.doing.toString());
  }

  removeFromDone(donelist: string) {
    this.done = this.done.filter(item => item != donelist);
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

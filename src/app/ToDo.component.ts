import { Component } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'ngx-filter-pipe';

interface Item {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './ToDo.component.html',
  styleUrls: ['./ToDo.component.css']
})

export class AppComponent {
  title = 'ToDoListPart1';
  taskInput: string;
  completedInput: boolean;

  toDo: Item[] = [
    { task: 'Clean', completed: false },
    { task: 'Meal Prep', completed: false },
    { task: 'Water Plants', completed: false },
  ];
  toDoFilter: any = {task: ''};

  constructor(private filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.toDo, { task: ''}));
  }

  addTask = () => {
    const newToDo = {
      task: this.taskInput,
      completed: this.completedInput,
    };
    this.toDo.push(newToDo);

    this.taskInput = null;
  }

  completeTask = (index) => {
    this.toDo[index].completed = true;
  };

  removeTask = (index) => {
    this.toDo.splice(index, 1)
  };

}

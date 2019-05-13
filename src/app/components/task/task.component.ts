import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  addTask = false;
  editTask = false;
  editReload = true;
  isLoaded = false;

  tasks = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.getTasks().subscribe(
      (data: {value: []}) => {
        this.tasks = data.value;
        console.log(this.tasks);
        this.isLoaded = true;
      }
    )
  }

  addToggle(event = null) {
    this.editTask = false;
    if(event)
      this.addTask = false;
    else
      this.addTask = true;
  }

  editToggle(event = null) {
    this.addTask = false;
    if(event){
      this.editTask = event;
    }
    else{
      this.editReload = false;
      this.editTask = false;
      this.editReload = true;
    }
  }

}

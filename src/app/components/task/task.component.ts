import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  openAdd = false;
  openEdit = false;

  constructor() { }

  ngOnInit() {
  }

  openAddToggle() {
    this.openAdd = !this.openAdd;
  }

  close() {
    this.openAdd = false;
  }

  openEditToggle() {
    this.openEdit = !this.openEdit;
  }

}

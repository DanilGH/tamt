import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() addTask;
  @Output() addToggle = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  close () {
    this.addToggle.emit(this.addTask);
  }

}

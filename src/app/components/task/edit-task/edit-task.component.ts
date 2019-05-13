import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  @Input() editTask;
  @Output() editToggle = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  close () {
    this.editToggle.emit(!this.editTask);
  }

}

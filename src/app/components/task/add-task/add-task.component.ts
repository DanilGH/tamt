import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() style;
  @Output() closeWin = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.closeWin.emit(false);
  }


}

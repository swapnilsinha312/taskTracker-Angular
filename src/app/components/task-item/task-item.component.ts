import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTaskReminder:EventEmitter<Task>= new EventEmitter();

  constructor() { }
  
  deleteTask(task:Task){
    // console.log(`Delete ${task.id} name ${task.text}`);
    this.onDeleteTask.emit(task);
  }

  toggleTaskReminder(task:Task){
    this.onToggleTaskReminder.emit(task);
    // console.log("Reminder");
  }

  ngOnInit(): void {
  }

}

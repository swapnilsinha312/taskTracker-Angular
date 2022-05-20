import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().
    subscribe(
      (tasks)=>{
        this.tasks=tasks;
      });
  }

  deleteTask(deleteTask:Task){
    this.taskService.deleteTask(deleteTask)
    .subscribe(()=>{
      this.tasks=this.tasks.filter((task)=>task._id!==deleteTask._id)
    });
  }
  
  toggleReminder(toggleTask:Task){
    toggleTask.reminder= !toggleTask.reminder;
    this.taskService.toggleTaskReminder(toggleTask).subscribe();
    // console.log("Call 2");
  }

  addTask(task:Task){
    this.taskService.addTask(task)
    .subscribe((task)=>{
      this.tasks.push(task);
    });
  }


}

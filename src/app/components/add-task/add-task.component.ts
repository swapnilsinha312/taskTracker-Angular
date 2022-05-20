import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task} from 'src/app/Task';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask:EventEmitter<Task>= new EventEmitter();

  text:string;
  time:string;
  reminder:boolean=false;
  showAddTask:boolean;
  subscription:Subscription;

  constructor(private uiService:UiServiceService) {
    this.subscription=this.uiService.onToggle().subscribe(
      (value)=>(this.showAddTask=value)
    );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    if(!this.text){
      alert('Please add a task');
      return;
    }

    if(!this.time){
      alert('Please enter the time');
    }

    const newTask={
      text:this.text,
      time:this.time,
      reminder:this.reminder
    }

    this.onAddTask.emit(newTask);
    // console.log(newTask);
    // console.log("Emitted");

    this.text='';
    this.time='';
    this.reminder=false;

  }

 

}

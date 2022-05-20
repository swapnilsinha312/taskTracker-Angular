import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl='http://localhost:8080/tasks';
  // private apiUrl='http://localhost:8080/api/tasks';

  constructor(private http:HttpClient) {}

  getTasks():Observable<Task[]>{
    return this.http.get<Task []>(this.apiUrl);
  }

  deleteTask(task:Task):Observable<Task>{
    const url= `${this.apiUrl}/${task._id}`;
    return this.http.delete<Task>(url);
  }

  toggleTaskReminder(task:Task):Observable<Task>{
    // task.reminder=!task.reminder;
    console.log("toggle");
    console.log(task);
    console.log("toggle");
    const url=`${this.apiUrl}/${task._id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }

}

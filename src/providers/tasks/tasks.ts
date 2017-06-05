import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksProvider {

  path: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(public http: Http) {
    console.log('Hello TasksProvider Provider');
  }

  getAll(){
    return this.http.get(this.path)
    .map(response => response.json())
    .toPromise();
  }

  create(task){
    return this.http.post(this.path, task)
    .map(response => response.json())
    .toPromise();
  }

  update(task){
    return this.http.put(this.path +'/'+ task.id, task)
    .map(response => response.json())
    .toPromise();
  }

  updatePatch(task){
    return this.http.patch(this.path +'/'+ task.id, task)
    .map(response => response.json())
    .toPromise();
  }

  delete(id: number){
    return this.http.delete(this.path +'/'+ id)
    .map(response => response.json())
    .toPromise();
  }

}

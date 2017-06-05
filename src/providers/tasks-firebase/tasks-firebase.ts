import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2/database';

@Injectable()
export class TasksFirebaseProvider {

  tasks: FirebaseListObservable<any>;

  constructor(
    private fireDatabase: AngularFireDatabase
  ) {
    this.tasks = this.fireDatabase.list('/tasks');
  }

  getAll(){
    return this.tasks;
  }

  create(task){
    return this.tasks.push(task);
  }

  update(task){
    return this.tasks.update(task.$key, task);
  }

  delete(key: string){
    return this.tasks.remove(key);
  }

}

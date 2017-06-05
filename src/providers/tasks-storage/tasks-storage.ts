import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TasksStorageProvider {

  constructor(
    private storage: Storage
  ) {}

  setTasks(tasks: any[]){
    return this.storage.set('tasks', JSON.stringify(tasks));
  }

  getTasks(){
    return this.storage.get('tasks');
  }

}

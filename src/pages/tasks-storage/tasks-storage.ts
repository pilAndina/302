import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksStorageProvider } from '../../providers/tasks-storage/tasks-storage';

@IonicPage()
@Component({
  selector: 'page-tasks-storage',
  templateUrl: 'tasks-storage.html',
})
export class TasksStoragePage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private tasksProvider: TasksStorageProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.tasksProvider.getTasks()
    .then(tasks=>{
      if(tasks !== null){
        this.tasks = JSON.parse(tasks);
      }
    })
    .catch(error =>{
      console.error( error );
    });
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Agregar una tarea',
      message: 'Digite el titulo de su tarea',
      inputs: [
        {
          name: 'title',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Guardar',
          handler: (data)=>{
            this.createTask(data.title);
          }
        }
      ]
    });
    alert.present();
  }

  showEditAlert( taskOld, index ){
    let alert = this.alertCtrl.create({
      title: 'Editar una tarea',
      message: 'Digite el titulo de su tarea',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: taskOld.title
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Guardar',
          handler: (data)=>{
            taskOld.title = data.title;
            this.tasksProvider.setTasks(this.tasks);
          }
        }
      ]
    });
    alert.present();
  }

  private createTask(title: string){
    let newTask = {
      title: title,
      completed: false,
      user: 1
    }
    this.tasks.unshift(newTask);
    this.tasksProvider.setTasks(this.tasks);
  }

  deleteTask( task, index){
    this.tasks.splice(index, 1);
    this.tasksProvider.setTasks(this.tasks)
  }

}

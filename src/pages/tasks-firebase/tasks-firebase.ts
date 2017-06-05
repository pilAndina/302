import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksFirebaseProvider } from '../../providers/tasks-firebase/tasks-firebase';

@IonicPage()
@Component({
  selector: 'page-tasks-firebase',
  templateUrl: 'tasks-firebase.html',
})
export class TasksFirebasePage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private tasksProvider: TasksFirebaseProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.tasksProvider.getAll()
    .subscribe(tasks =>{
      this.tasks = tasks;
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
            this.updateTask(taskOld);
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
    this.tasksProvider.create(newTask);
  }

  private updateTask(task){
    this.tasksProvider.update(task);
  }

  deleteTask( task, index){
    this.tasksProvider.delete(task.$key);
  }

}

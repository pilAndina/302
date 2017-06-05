import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksProvider } from '../../providers/tasks/tasks';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private tasksProvider: TasksProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.tasksProvider.getAll()
    .then(tasks=>{
      this.tasks = tasks;
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
            let updateTask = Object.assign({}, taskOld);
            updateTask.title = data.title;
            this.updateTask(updateTask, index);
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
    this.tasksProvider.create(newTask)
    .then(task =>{
      this.tasks.unshift(task);
    })
    .catch(error =>{
      console.error(error);
    })
  }

  private updateTask(task, index){
    console.log(index);
    this.tasksProvider.update(task)
    .then(task =>{
      this.tasks[index] = task;
    })
    .catch(error =>{
      console.error(error);
    })
  }

  deleteTask( task, index){
    this.tasksProvider.delete(task.id)
    .then(data =>{
      this.tasks.splice(index, 1);
    })
    .catch(error =>{
      console
    })
  }

}

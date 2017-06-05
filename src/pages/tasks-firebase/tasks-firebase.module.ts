import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksFirebasePage } from './tasks-firebase';

@NgModule({
  declarations: [
    TasksFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(TasksFirebasePage),
  ],
  exports: [
    TasksFirebasePage
  ]
})
export class TasksFirebasePageModule {}

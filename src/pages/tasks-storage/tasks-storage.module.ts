import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksStoragePage } from './tasks-storage';

@NgModule({
  declarations: [
    TasksStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(TasksStoragePage),
  ],
  exports: [
    TasksStoragePage
  ]
})
export class TasksStoragePageModule {}

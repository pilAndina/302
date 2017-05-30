import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksUndonePage } from './tasks-undone';

@NgModule({
  declarations: [
    TasksUndonePage,
  ],
  imports: [
    IonicPageModule.forChild(TasksUndonePage),
  ],
  exports: [
    TasksUndonePage
  ]
})
export class TasksUndonePageModule {}

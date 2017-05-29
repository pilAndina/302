import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroesPage } from './heroes';

@NgModule({
  declarations: [
    HeroesPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroesPage),
  ],
  exports: [
    HeroesPage
  ]
})
export class HeroesPageModule {}

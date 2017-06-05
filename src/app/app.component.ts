import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';

import { TasksSqliteProvider } from '../providers/tasks-sqlite/tasks-sqlite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) navMaster: Nav;
  rootPage: any = 'HomePage';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private sqlite: SQLite,
    private tasksSqliteProvider: TasksSqliteProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.createDatabase();
      this.menuCtrl.enable(false, 'menuAdmin');
      this.menuCtrl.enable(false, 'menuSales');
    });
  }

  goToPage(page: string){
    this.navMaster.setRoot(page);
  }


  logout(){
    //clear session
    this.navMaster.setRoot('TutorialPage');
    this.menuCtrl.enable(false, 'menuSales');
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then(database=>{
      this.tasksSqliteProvider.setDatabase(database);
      this.tasksSqliteProvider.createTable();
    })
    .catch(error =>{
      console.log(error);
    })
  }
}


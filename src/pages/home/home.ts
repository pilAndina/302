import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HOME');
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(true, 'menuSales');
  }

  goToUsersPage(){
    this.navCtrl.push('UsersPage');
  }

  goToHeroesPage(){
    this.navCtrl.push('HeroesPage');
  }

}

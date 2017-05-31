import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usersProvider: UsersProvider,
    private menuCtrl: MenuController,
    private loadCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    let load = this.loadCtrl.create({
      duration: 40000,
      content: 'Solicitando usuarios'
    });
    load.present();
    this.usersProvider.getUsers()
    .then(data=>{
      load.dismiss();
      this.users = data.results;
    })
    .catch(error=>{
      load.dismiss();
      console.error(error);
    })
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    // this.menuCtrl.enable(false, 'menuAdmin');
    // this.menuCtrl.enable(true,  'menuSales');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  goToUserDetail( clickedUser ){
    this.navCtrl.push('UserPage',{
      user: clickedUser
    });
    // this.navCtrl.push('UserPage',{
    //   name: 'nicolas',
    //   age: 1212,
    //   isSingle: false,
    //   heroe: {
    //     name: 'super nico'
    //   },
    //   list: [1,2,4,5,3]
    // });
  }

}
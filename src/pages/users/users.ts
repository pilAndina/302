import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

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
    private menuCtrl: MenuController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Users');
    this.usersProvider.getUsers()
    .then(data=>{
      this.users = data.results;
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
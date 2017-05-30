import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    private usersProvider: UsersProvider
  ) {}

  ionViewDidLoad() {
    this.usersProvider.getUsers()
    .then(data=>{
      this.users = data.results;
    })
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
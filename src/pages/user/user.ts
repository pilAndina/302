import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user: any = {
    name: {},
    picture: {}
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.user = this.navParams.get('user');
    console.log(this.user);
    // let name = this.navParams.get('name');
    // console.log(name);
    // let age = this.navParams.get('age');
    // console.log(age);
    // let isSingle = this.navParams.get('isSingle');
    // console.log(isSingle);
    // this.heroe = this.navParams.get('heroe');
    // let list = this.navParams.get('list');
    // console.log(list);

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the HeroesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesPage');
  }

  goToBack(){
    setTimeout(()=>{
      console.log('todo salio ok');
      this.navCtrl.pop();
    },5000);
  }

  close(){
    this.viewCtrl.dismiss();
  }

}

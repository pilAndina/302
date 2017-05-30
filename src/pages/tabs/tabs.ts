import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController
  ) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menuAdmin');
    this.menuCtrl.enable(true, 'menuSales');
  }

}

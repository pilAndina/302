import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ToastController, LoadingController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menuSales');
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

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Cuidado!',
      message: 'Su bateria esta baja',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  showConfirm(){
    let alert = this.alertCtrl.create({
      title: '¿Esta seguro?',
      message: 'El registro se borrara para siempre',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Borrar',
          handler: ()=>{
            console.log('Click en Borrar');
          }
        }
      ]
    });
    alert.present();
  }

  showPrompt(){
    let alert = this.alertCtrl.create({
      title: 'Agregar una tarea',
      message: 'Digite el titulo de su tarea',
      inputs: [
        {
          name: 'title',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Guardar',
          handler: (data)=>{
            console.log(data.title);
            console.log('Click en Guadar');
            this.showToastNormal('su tarea fue creada 1');
          }
        }
      ]
    });
    alert.present();
  }

  showToastNormal(message: string = 'Un mensaje'){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'Cerrar'
    });
    toast.present();
  }

  doSomething(){
    let load = this.loadCtrl.create();
    load.present();
    setTimeout(()=> {
      load.dismiss();
    }, 10000);
  }

  showModal(){
    let modal = this.modalCtrl.create('HeroesPage');
    modal.present();
  }

}

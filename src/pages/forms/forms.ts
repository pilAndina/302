import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyValidators } from '../validators';

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required]],
      age: ['', [Validators.required, MyValidators.isOld]],
      phone: [''],
      date: [''],
      lang: [''],
      lang2: [''],
      date2: [''],
      volume: [50],
      horror: [false],
      drama: [true],
      accion: [false],
      gender: ['M'],
      notifications: [true],
      mail: [true],
      sms: [false],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }

  saveData(){
    console.log(this.registerForm.value);
  }

}

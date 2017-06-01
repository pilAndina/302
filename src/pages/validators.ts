import { FormControl } from '@angular/forms';

export class MyValidators{

  static isOld(control: FormControl){
    let age = control.value;
    return (age < 18) ? {'isold': true} : null;
  }

}
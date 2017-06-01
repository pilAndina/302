import { FormControl, AbstractControl } from '@angular/forms';

export class MyValidators{

  static isOld(control: FormControl){
    let age = control.value;
    return (age < 18) ? {'isold': true} : null;
  }

  static matchPassword(group: AbstractControl){
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;
    return (password != confirmPassword) ? {'nomatch': true} : null;
  }

}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersProvider {

  constructor(public http: Http) {
    console.log('Create Read Update Delete');
  }

  getUsers(){
    return this.http.get('https://randomuser.me/api/?results=50')
    .map(response => response.json())
    .toPromise();
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private  http: HttpClient) {
  }

  getUserList(): Observable<any> {
    return this.http.get('https://reqres.in/api/users');
  }

  login(email,prenom){
    console.log('email : '+email)
  }
}
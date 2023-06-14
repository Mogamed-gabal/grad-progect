import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData=new BehaviorSubject('null')
  sveUserData()
  {
  let encodedData=JSON.stringify( localStorage.getItem('token'))
  let decodedData:any=jwt_decode(encodedData)
  this.userData.next(decodedData)
  console.log(this.userData)
  localStorage.setItem('decodeToken',JSON.stringify( this.userData) )
  }

  constructor(private _HttpClient:HttpClient) { }
  singUp(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://policia.onrender.com/users/signup',formData)
  }
  signIn(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://policia.onrender.com/users/signin',formData)
  }
  updateUserImg(formData:object):Observable<any>
  {
    return this._HttpClient.put('https://policia.onrender.com/users/updateUserImg',formData)

  }
  addDetails(details:object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:3000/losted/addModel',details)
  }

  

}


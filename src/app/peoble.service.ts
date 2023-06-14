import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeobleService {

  constructor(private _http:HttpClient) { }

  getdetail():Observable<any>
  {
    return this._http.get(`https://policia.onrender.com/losted/getAllPeoble`)
  }

  addDetils(formdetails:object):Observable<any>
  {
    return this._http.post(`https://policia.onrender.com/losted/addModel`,formdetails)
  }
  getLostedDetail(_id:string):Observable<any>
  {
    return this._http.get(`https://policia.onrender.com/losted/getPosts/${_id}`)
  }
  getUserLostedPosts(email:string):Observable<any>
  {
    return this._http.get(`https://policia.onrender.com/losted//getUserActions/${email}`)
  }
  getUserLostedObject(email:string):Observable<any>
  {
    return this._http.get(`https://policia.onrender.com/objects/getUserActions/${email}`)
  }
    
  }


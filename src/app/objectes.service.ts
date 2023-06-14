import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObjectesService {

  constructor(private HttpClient:HttpClient) { }

  getdetail():Observable<any>
  {
    return this.HttpClient.get(`https://policia.onrender.com/objects/getAllModels`)
  }
  getSpeceficCategory(category:any):Observable<any>
  {
    return this.HttpClient.get(`https://policia.onrender.com/objects//getCategory/${category}`)
  }

  addDetils(formdetails:object):Observable<any>
  {
    return this.HttpClient.post(`https://policia.onrender.com/objects/addModel`,formdetails)
}
}
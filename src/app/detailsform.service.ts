import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailsformService {

  constructor(private _HttpClient:HttpClient) { }

  sendFormData(formData:object):Observable<any>
  {
   return this._HttpClient.post('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8/signup',formData)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FingerService {
  
  constructor(private HttpClient:HttpClient) { }

  sendData(formData:object):Observable<any>
  {
    return this.HttpClient.post(`https://policia.onrender.com/records/takeAnum`,formData)
  }
}

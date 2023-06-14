import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  constructor(private _HttpClient:HttpClient) { }


  complains(complain:object):Observable<any>
  {
    return this._HttpClient.post('https://policia.onrender.com/complains/addComplain',complain)
  }
}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatinService {

  constructor(private _http:HttpClient) { }

  
  getPeoble():Observable<any>
  {
    return this._http.get(`http://localhost:4500/getalluser`)
  }
}

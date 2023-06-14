import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RebortsService {
  constructor(private http:HttpClient) { }

  sendMobileRebort(formData:object):Observable<any>
{
  return this.http.post(`https://egyptpolicestations.onrender.com/mobileReports/addReport`,formData)
}
sendMobileCarRebot(formData:object):Observable<any>
{
  return this.http.post(`https://egyptpolicestations.onrender.com/carReports/addReport`,formData)
}
sendMobileThingsRebot(formData:object):Observable<any>
{
  return this.http.post(`https://egyptpolicestations.onrender.com/lostedReports/addReport`,formData)
}
getUserReborts(email:any):Observable<any>
{
  return this.http.get(`https://egyptpolicestations.onrender.com/lostedReports/getUserReport/${email}`)
}
getUserCarsReborts(email:any):Observable<any>
{
  return this.http.get(`https://egyptpolicestations.onrender.com/carReports/getUserReport/${email}`)
}
getUserMobilsReborts(email:any):Observable<any>
{
  return this.http.get(`https://egyptpolicestations.onrender.com/mobileReports/getUserReport/${email}`)
}
}

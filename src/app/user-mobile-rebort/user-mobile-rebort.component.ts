
import { RebortsService } from './../reborts.service';
import { Component,OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
@Component({
   selector: 'app-user-mobile-rebort',
     templateUrl: './user-mobile-rebort.component.html',
     styleUrls: ['./user-mobile-rebort.component.css']
})
export class UserMobileRebortComponent implements OnInit {

    

  data:any[]=[]
  token:any
  Date:any

  constructor(private RebortsService:RebortsService){}


  ngOnInit(): void {
    
    this.token=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
    console.log(this.token)
    this.RebortsService.getUserMobilsReborts(this.token.userMail).subscribe({
      next:(details)=>{
        this.data=details.userReport
        let data=new Date()
       
        this.Date=data.setDate(1)
        console.log(this.data)
      }
    })
  }
}


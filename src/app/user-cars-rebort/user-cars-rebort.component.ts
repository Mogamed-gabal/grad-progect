import { RebortsService } from './../reborts.service';
import { Component,OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-user-cars-rebort',
  templateUrl: './user-cars-rebort.component.html',
  styleUrls: ['./user-cars-rebort.component.css']
})
export class UserCarsRebortComponent implements OnInit {

    

  data:any[]=[]
  token:any
  Date:any

  constructor(private RebortsService:RebortsService){}


  ngOnInit(): void {
    
    this.token=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
    console.log(this.token)
    this.RebortsService.getUserCarsReborts(this.token.userMail).subscribe({
      next:(details)=>{
        this.data=details.userReport
        let data=new Date()
       
        this.Date=data.setDate(1)
        console.log(this.data)
      }
    })
  }
}

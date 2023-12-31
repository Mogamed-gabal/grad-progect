import { Component,OnInit } from '@angular/core';
import { RebortsService } from '../reborts.service';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-mohamed',
  templateUrl: './mohamed.component.html',
  styleUrls: ['./mohamed.component.css']
})

export class MohamedComponent implements OnInit {
  data:any[]=[]
  token:any
  Date:any

  constructor(private RebortsService:RebortsService,private spinner: NgxSpinnerService){}


  ngOnInit(): void {
    this.spinner.show();
    this.token=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
    console.log(this.token)
    this.RebortsService.getUserReborts(this.token.userMail).subscribe({
      next:(details)=>{
        this.data=details.userReport
        let data=new Date()
        this.Date=data.setDate(1)
        console.log(this.data)
        this.spinner.hide();
      }
    })
  }
}

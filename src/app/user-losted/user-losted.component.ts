import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { PeobleService } from '../peoble.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-losted',
  templateUrl: './user-losted.component.html',
  styleUrls: ['./user-losted.component.css']
})
export class UserLostedComponent implements OnInit {
  data:any[]=[]
  token:any
  constructor(private PeobleService:PeobleService,private spinner: NgxSpinnerService){
  
  }

  ngOnInit(): void {
    this.spinner.show();
    this.token=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
    console.log(this.token)
    this.PeobleService.getUserLostedPosts(this.token.userMail).subscribe({
      
      next:(details)=>{
        this.data=details.posts
        console.log(this.data)
        this.spinner.hide();
      }
    })
  }
}

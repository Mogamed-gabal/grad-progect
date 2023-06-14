import { Component,OnInit } from '@angular/core';
import { PeobleService } from '../peoble.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-userobjects',
  templateUrl: './userobjects.component.html',
  styleUrls: ['./userobjects.component.css']
})
export class UserobjectsComponent implements OnInit {
  token:any
  data:any
 
  imgPrefix:string='https://policia.onrender.com'
  constructor(private _PeobleService:PeobleService){}

  ngOnInit(): void {
    this.token=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
    console.log(this.token)
    this._PeobleService.getUserLostedObject(this.token.userMail).subscribe({
      next:(details)=>{
        this.data=details.userPosts
        console.log(this.data)
      }
    })
    
  }

}

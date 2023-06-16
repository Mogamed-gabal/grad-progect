import { AuthenticatinService } from './../authenticatin.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnChanges {
  token:string='';
  erroeMessage:string='';
  isLoading:Boolean=false
  isLogend:boolean=false
  LoginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
})
  constructor(private _UsersService:UsersService ,private _Router:Router,private auth:AuthenticatinService){}
  submitLoginForm(LoginForm:FormGroup)
  {    
    this.isLoading=true
     this._UsersService.signIn(LoginForm.value).subscribe({
      next:(res)=>
      {
     
        if(res.message==="login success")
        {
          this.isLoading=false
          this.isLogend=false
          this.token=res.token
          localStorage.setItem('token',JSON.stringify(this.token))
          this ._Router.navigate(['/home'])
          this._UsersService.sveUserData()
          

        }
        else
        {
          this.isLoading=false
          this.isLogend=true
          this.erroeMessage=res.message;
          console.log(this.erroeMessage)
          
        }
      }
    })
  }


  ngOnInit(): void {
       const token=localStorage.getItem('token')
       if(token)
       {
        this._Router.navigate(['/home'])
       }
    
  }

  ngOnChanges(): void {
    
  }

}


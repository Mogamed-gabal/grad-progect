import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
erroeMessage:string='';
err:boolean=false
isLoading:Boolean=false

  registerForm:FormGroup=new FormGroup({
    full_name:new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(32)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('[A-Z][a-z][0-9]{6}')]),
    address:new FormControl(null,[Validators.required,Validators.minLength(15)]),
    jop:new FormControl(null,[Validators.required]),
    phone_number:new FormControl(null,[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),
    national_id:new FormControl(null,[Validators.required,Validators.min(14),Validators.max(14)]),
    mother_name:new FormControl(null,[Validators.required]),
})


  constructor(private _UsersService:UsersService ,private _Router:Router)
  {
    
  }
  submitRegisterForm(registerForm:FormGroup)
  {    
    this.isLoading=true
    this._UsersService.singUp(registerForm.value).subscribe({
      next:(res)=>
      {
        if(res.message==="success")
        {
          
          this.isLoading=false
          console.log("success")
          this ._Router.navigate(['/login'])
          
        }else
        {
          this.isLoading=false
          this.err=true
          this.erroeMessage=res;
          console.log(this.erroeMessage)
          
        }
      }
    })
    
   
    
  }
  ngOnInit(): void {
    
  }
}

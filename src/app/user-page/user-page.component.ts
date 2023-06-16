import { Component,OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { UsersService } from '../users.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit  {

  isLoading:Boolean=false
  decodedToken:{}={}
  myForm:any
  openForm:Boolean=false
  token:any
  userName:string=''
  userMail:string=''
  user_Jop:string=''
  user_phone:string=''
  imgPrefix='https://policia.onrender.com/'
  userImg:string=''
  constructor(private UsersService:UsersService,private fb:FormBuilder,private Router:Router,private spinner: NgxSpinnerService){}
  opnForm()
  {
    this.openForm=true
  }
  sendData()
  {
    this.isLoading=true
    const formData=new FormData()
    formData.append('user_img',this.myForm.get('user_img').value)
    formData.append('_id',this.myForm.get('_id').value)
    this.UsersService.updateUserImg(formData).subscribe({
      next:(res)=>{
        if(res.message=='success')
        {
          this.isLoading=false
          alert ('image addedd successfule,please you have to sign in again because of some security issus')
          this.openForm=false
        }else
        {
          this.isLoading=false
          console.log(res)
        }
      }
    })
  }
  
  onFileSelect(event:any)
{
  const file=event.target.files[0]
  this.myForm.get('user_img')?.setValue(file)
}
  ngOnInit(): void {


    this.token=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
    this.userName=this.token.userName
    this.userMail=this.token.userMail
    this.user_Jop=this.token.user_Jop
    this.user_phone=this.token.user_phone
    
    console.log(this.token)
    
    this.myForm=this.fb.group({
      user_img:['',Validators.required],
      _id:[this.token._id,Validators.required]
    })
    if(this.token.find(this.userImg))
    {
      this.userImg=this.token.img
    }
    
  }
}

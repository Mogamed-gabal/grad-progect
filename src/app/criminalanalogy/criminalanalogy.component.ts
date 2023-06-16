import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { FingerService } from '../finger.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-criminalanalogy',
  templateUrl: './criminalanalogy.component.html',
  styleUrls: ['./criminalanalogy.component.css']
})
export class CriminalanalogyComponent implements OnInit {
  erroeMessage:string='';
  err:boolean=false
  isLoading=false
  openForm:boolean=false
  userName:string=''
  userMail:string=''
  userId:string=''
  userPhone:string=''
  date:any
  num:any
  token:any
constructor(private FingerService:FingerService,private _Router:Router){}
  criminalForm:FormGroup=new FormGroup({
    name:new FormControl(''),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),
    secondPhoneNum:new FormControl('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),
    homePhone:new FormControl('',[Validators.required]),
    workPhoneNum:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email]),
    numberOfRaw:new FormControl('',[Validators.required]),
    national_id:new FormControl('',[Validators.required]),
    referTO:new FormControl('',[Validators.required])

  })
  openFormData()
  {
    this.openForm=true
  }
  sendData()
  {
    this.isLoading=true
    this.FingerService.sendData(this.criminalForm.value).subscribe({
      next:(res)=>{
        if(res.message=='success')
        {

          this.isLoading=false
         console.log('success');
         this.openForm=false
         this ._Router.navigate(['/success'])
        }else
        {
          this.erroeMessage=res;
          this.isLoading=false
          console.log(res)
        }
      }
    })
  }
  test(){
    let arr=[1,2,3,4,5,6]
    this.num=arr.shift()
    // console.log(num)
  }
  test2(){
    let arr=['1AM','5AM','4AM','3AM','5AM','6AM']
    this.date=arr.shift()
    // console.log(num)
  }
  geFormData()
  {
    console.log(this.criminalForm.value)
  }

  ngOnInit(): void {
    this.test()
    this.test2()
    this.token=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
    console.log(this.token)
   this.userName=this.token.userName
   this.userMail=this.token.userMail
   this.userPhone=this.token.user_phone
   this.userId=this.token.national_id
   this.criminalForm.get('name')?.setValue(this.userName)
   this.criminalForm.get('phoneNumber')?.setValue(this.userPhone)
   this.criminalForm.get('national_id')?.setValue(this.userId)
   this.criminalForm.get('email')?.setValue(this.userMail)
   this.criminalForm.get('numberOfRaw')?.setValue(JSON.stringify( this.num))
   this.geFormData()
   
  }
}

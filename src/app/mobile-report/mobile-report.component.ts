import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { RebortsService } from '../reborts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-report',
  templateUrl: './mobile-report.component.html',
  styleUrls: ['./mobile-report.component.css']
})
export class MobileReportComponent implements OnInit {
erroeMessage:string='';
err:boolean=false
rebortNumber:any;
isLoading:Boolean=false
mobileRebortForm:FormGroup=new FormGroup({
  full_name:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  brand:new FormControl(null,[Validators.required]),
  dateof:new FormControl(null,[Validators.required]),
  rebortNum:new FormControl(null,[Validators.required]),
  model:new FormControl(null,[Validators.required]),
  userId:new FormControl(null,[Validators.required]),
  SerialNumber:new FormControl(null,[Validators.required]),
  state:new FormControl(null),
  dwescribtio:new FormControl(null,[Validators.required,Validators.minLength(50),Validators.maxLength(500)])
})
  constructor(private RebortsService:RebortsService,private Router:Router){ }
  generateRandomNumber() {
    
    this.rebortNumber= Math.floor(Math.random() * 90000000) + 10000000;
   this.mobileRebortForm.get('rebortNum')?.setValue(JSON.stringify(this.rebortNumber))
  }
  sendData()
  {
    this.isLoading=true
    let encodedData=JSON.stringify( localStorage.getItem('token'))
  let decodedData:any=jwt_decode(encodedData)
  if(decodedData)
  {
    
    this.mobileRebortForm.get('state')?.setValue('pending')
    this.mobileRebortForm.get('userId')?.setValue(decodedData._id)
    this.mobileRebortForm.get('email')?.setValue(decodedData.userMail)
    this.generateRandomNumber()
    console.log(this.mobileRebortForm.value)
    this.RebortsService.sendMobileRebort(this.mobileRebortForm.value).subscribe({
      next:(res)=>{
        if(res.message=='success')
        {
          this.isLoading=false
          this.Router.navigate(['/success'])
          console.log(this.mobileRebortForm.value)
        }else
        {
          this.isLoading=false
          console.log(res)
          this.err=true
          this.erroeMessage=res
        }
      }
    })

  }
  }
  ngOnInit(): void {
   
    
  }
}

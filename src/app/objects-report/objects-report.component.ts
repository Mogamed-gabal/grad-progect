import { Component, OnInit } from '@angular/core';
import { RebortsService } from './../reborts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
@Component({
  selector: 'app-objects-report',
  templateUrl: './objects-report.component.html',
  styleUrls: ['./objects-report.component.css']
})
export class ObjectsReportComponent implements OnInit  {
  constructor(private RebortsService:RebortsService,private Router:Router){ }

erroeMessage:string='';
err:boolean=false
isLoading:Boolean=false
rebortNumber:any;
mobileRebortForm:FormGroup=new FormGroup({
  full_name:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  userId:new FormControl(null,[Validators.required]),
  idNumber:new FormControl(null,[Validators.required]),
  rebortNum:new FormControl(null,[Validators.required]),
  type:new FormControl(null,[Validators.required]),
  state:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.required]),
  dateof:new FormControl(null,[Validators.required]),
  placeofresidence:new FormControl(null,[Validators.required]),
  dwescribtio:new FormControl(null,[Validators.required,Validators.minLength(50),Validators.maxLength(500)])
})

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
    this.mobileRebortForm.get('idNumber')?.setValue(decodedData._id)
    this.mobileRebortForm.get('email')?.setValue(decodedData.userMail)
    this.generateRandomNumber()
    console.log(this.mobileRebortForm.value)
    this.RebortsService.sendMobileThingsRebot(this.mobileRebortForm.value).subscribe({
      next:(res)=>{
        if(res.message=='success')
        {
          this.isLoading=false
          this.Router.navigate(['/success'])
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









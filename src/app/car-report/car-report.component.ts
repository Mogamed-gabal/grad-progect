import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { RebortsService } from '../reborts.service';
@Component({
  selector: 'app-car-report',
  templateUrl: './car-report.component.html',
  styleUrls: ['./car-report.component.css']
})
export class CarReportComponent {
  erroeMessage:string='';
err:boolean=false
isLoading:Boolean=false
rebortNumber:any;
carRebortForm:FormGroup=new FormGroup({
  full_name:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  brand:new FormControl(null,[Validators.required]),
  dateof:new FormControl(null,[Validators.required]),
  rebortNum:new FormControl(null,[Validators.required]),
  model:new FormControl(null,[Validators.required]),
  userId:new FormControl(null,[Validators.required]),
  idNumber:new FormControl(null,[Validators.required]),
  licenPlate:new FormControl(null,[Validators.required]),
  color:new FormControl(null,[Validators.required]),
  dwescribtio:new FormControl(null,[Validators.required,Validators.minLength(50),Validators.maxLength(500)])
})
  constructor(private RebortsService:RebortsService,private Router:Router){ }
  generateRandomNumber() {
    
    this.rebortNumber= Math.floor(Math.random() * 90000000) + 10000000;
   this.carRebortForm.get('rebortNum')?.setValue(JSON.stringify(this.rebortNumber))
  }
  sendData()
  {
    this.isLoading=true
    let encodedData=JSON.stringify( localStorage.getItem('token'))
  let decodedData:any=jwt_decode(encodedData)
  if(decodedData)
  {
    // this.mobileRebortForm.get('state')?.setValue('pending')
    this.carRebortForm.get('userId')?.setValue(decodedData._id)
    this.carRebortForm.get('email')?.setValue(decodedData.userMail)
    this.generateRandomNumber()
    console.log(this.carRebortForm.value)
    this.RebortsService.sendMobileCarRebot(this.carRebortForm.value).subscribe({
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








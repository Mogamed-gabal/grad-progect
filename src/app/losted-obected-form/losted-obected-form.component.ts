import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ObjectesService } from '../objectes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-losted-obected-form',
  templateUrl: './losted-obected-form.component.html',
  styleUrls: ['./losted-obected-form.component.css']
})
export class LostedObectedFormComponent implements OnInit {
  myForm:any
  erroeMessage:string='';
  err:boolean=false
  isLoading:Boolean=false
  constructor(private fb:FormBuilder,private ObjectesService:ObjectesService,private Router:Router){}

  onFileSelect(event:any)
{
  const file=event.target.files[0]
  this.myForm.get('img')?.setValue(file)
}
onSubmit()
{
  this.isLoading=true
  const formData=new FormData()
  formData.append('img',this.myForm.get('img').value)
  formData.append('user_name',this.myForm.get('user_name').value)
  formData.append('userEmail',this.myForm.get('userEmail').value)
  formData.append('describtion',this.myForm.get('describtion').value)
  formData.append('category',this.myForm.get('category').value)
  this.ObjectesService.addDetils(formData).subscribe({
    next:(res)=>{
      if(res.Message=="success")
      {
        this.isLoading=false
        console.log('succes')
        this.Router.navigate(['/success'])
      }
      else
      {
        this.isLoading=false  
        this.err=true
        this.erroeMessage=JSON.stringify(res)
        this.isLoading=false
        console.log('no'+JSON.stringify(res) )
        this.Router.navigate(['/success'])
        
      }
    }
  })
  console.log(this.myForm.value)

}
  ngOnInit(): void {
    this.myForm=this.fb.group({
      user_name:['',Validators.required],
      userEmail:['',Validators.required,Validators.email],
      describtion:['',Validators.required],
      category:['',Validators.required],
      img:['',Validators.required]
  
    })
  }
  }



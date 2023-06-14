import { PeobleService } from './../peoble.service';
import { UsersService } from './../users.service';
import { DetailsformService } from './../detailsform.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, RequiredValidator, FormBuilder } from '@angular/forms';
import { Component,OnInit } from '@angular/core'
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {
  myForm:any
  erroeMessage:string='';
  err:boolean=false
  isLoading:Boolean=false
  constructor(private _Router:Router ,private PeobleService:PeobleService,private fb:FormBuilder)
{}


// formdetails:FormGroup=new FormGroup({
//   fullName:new FormControl(null,[Validators.required,Validators.maxLength(30),Validators.minLength(6)]),
//   email:new FormControl(null,[Validators.required,Validators.email]),
//   phone_number:new FormControl(null,[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),
//   overviwe:new FormControl(null,[Validators.required]),
//   img:new FormControl(null,[Validators.required]),
//   chieldAge:new FormControl(null,[Validators.required])
// })
onFileSelect(event:any)
{
  const file=event.target.files[0]
  this.myForm.get('img')?.setValue(file)
}


toHome(formdetails:FormGroup)
{
  
            this ._Router.navigate(['/success'])
            console.log(formdetails.value)
}
onSubmit()
{
  this.isLoading=true
  const formData=new FormData()
  formData.append('img',this.myForm.get('img').value)
  formData.append('fullName',this.myForm.get('fullName').value)
  formData.append('email',this.myForm.get('email').value)
  formData.append('phone_number',this.myForm.get('phone_number').value)
  formData.append('overviwe',this.myForm.get('overviwe').value)
  formData.append('chieldAge',this.myForm.get('chieldAge').value)

  this.PeobleService.addDetils(formData).subscribe({
    next:(res)=>{
      if(res.message=='success')
      {
        this.isLoading=false
        console.log('succes')
        this ._Router.navigate(['/success'])
      }
      else
      {
        this.isLoading=false  
        this.err=true
        this.erroeMessage=res
        console.log('no'+JSON.stringify(res) )
      }
    }
  })

}

ngOnInit(): void {
  this.myForm=this.fb.group({
    fullName:['',Validators.required],
    email:['',Validators.required],
    phone_number:['',Validators.required],
    overviwe:['',Validators.required],
    chieldAge:['',Validators.required],
    img:['',Validators.required]

  })
}
}

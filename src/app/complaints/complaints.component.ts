import { Router } from '@angular/router';
import { Form, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Component,OnInit } from '@angular/core';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {




  imageFormData:any
name:string='';
errormessage:any;
isLoading=false;


complainsForm:FormGroup=new FormGroup({
    full_name:new FormControl(null,[Validators.minLength(10),Validators.maxLength(20),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    texterea:new FormControl(null,[Validators.maxLength(500),Validators.minLength(50),Validators.required]),

    type:new FormControl(null,[Validators.required])
  })
constructor(private ComplainService:ComplainService ,private Router:Router,private bulid:FormBuilder){}


myForm:any
saveComplains(myForm:FormGroup)
{
  this.isLoading=true
  // const formData=new FormData()
  // formData.append('complainImg',this.myForm.get('complainImg').value)
  // formData.append('full_name',this.myForm.get('full_name').value)
  // formData.append('email',this.myForm.get('email').value)
  // formData.append('phone_number',this.myForm.get('phone_number').value)
  // formData.append('texterea',this.myForm.get('texterea').value)
  // formData.append('type',this.myForm.get('type').value)

  // this.isLoading=true;
  // console.log()
  this.ComplainService.complains(this.complainsForm.value).subscribe(
    {
    
      next:(res)=>
      {
        if(res.message==="success")
        {
          this.isLoading=false
          this .Router.navigate(['/success']);
          this.isLoading=false;

        }else
        {
          this.isLoading=false
         this.errormessage=res
         console.log(this.errormessage)
         this.isLoading=false;
        }
        
      }
     
      
      
    }
  )
}
onFileSelect(event:any)
{
  const file=event.target.files[0]
  this.myForm.get('complainImg')?.setValue(file)
}
ngOnInit(): void {
  this.myForm=this.bulid.group({
    full_name:['',[Validators.minLength(10),Validators.maxLength(20),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      texterea:['',[Validators.maxLength(500),Validators.minLength(50),Validators.required]],
      complainImg:['',[Validators.required]],
      type:['',[Validators.required]]
  })
  
}

}

import { Component,OnInit } from '@angular/core';
import { ObjectesService } from '../objectes.service';
@Component({
  selector: 'app-losted-obected-page',
  templateUrl: './losted-obected-page.component.html',
  styleUrls: ['./losted-obected-page.component.css']
})
export class LostedObectedPageComponent implements OnInit {

constructor( private ObjectesService:ObjectesService)
{
  
}
data:Boolean=true

losted:any[]=[]
lostedPerson:any[]=[];
imgPrefix:string='https://policia.onrender.com/'
term:string='';
index:any
categories:any[]=['car','mobile','pakges']

ngOnInit(): void {
    

    this.getAllCategories()

  }
  getCategories(category:string)
  {
    this.ObjectesService.getSpeceficCategory(category).subscribe({
      next:(losted)=>{
        this.losted=losted.model
        console.log(this.losted)
      }
    })
  }
  getAllCategories()
  {
    this.ObjectesService.getdetail().subscribe({
      next:(losted)=>{
        this.losted=losted.data
        this.data=false
      }
    })
  }
  
}

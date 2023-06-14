import { PeobleService } from './../peoble.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-lostedone',
  templateUrl: './lostedone.component.html',
  styleUrls: ['./lostedone.component.css']
})
export class LostedoneComponent implements OnInit {
 
constructor(private _PeobleService:PeobleService)
{}
videoOptions = {
  width: 10,
  height: 10,
  fps: 90
};

handleImageCapture(event:any) {
}
openStream:Boolean=false
losted:any[]=[]
lostedPerson:any[]=[];
imgPrefix:string='https://policia.onrender.com/'
term:string='';
index:any


OpenCam()
{
  this.openStream=true
}
closeCam()
{
  this.openStream=false
}
ngOnInit(): void {
    this._PeobleService.getdetail().subscribe({
      next:(peoble)=>this.losted=peoble.moedels
  
    })
    
  }
  
}


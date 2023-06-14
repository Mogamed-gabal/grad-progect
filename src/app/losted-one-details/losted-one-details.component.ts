import { ActivatedRoute } from '@angular/router';
import { PeobleService } from './../peoble.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-losted-one-details',
  templateUrl: './losted-one-details.component.html',
  styleUrls: ['./losted-one-details.component.css']
})
export class LostedOneDetailsComponent implements OnInit {
  allDetails:any[]=[]
  lostedDetails:string='';
  imgPrefix:string='https://policia.onrender.com/'
  constructor(private PeobleService:PeobleService, private ActivatedRoute:ActivatedRoute){}



  ngOnInit(): void {
    this.lostedDetails= this.ActivatedRoute.snapshot.params['_id']
    this.PeobleService.getLostedDetail(this.lostedDetails).subscribe({
      next:(details)=>{
        this.allDetails=details.posts
        console.log(this.allDetails)

      }
    })
    
  }

}

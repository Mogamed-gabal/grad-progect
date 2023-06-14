import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-losted-objects',
  templateUrl: './losted-objects.component.html',
  styleUrls: ['./losted-objects.component.css']
})
export class LostedObjectsComponent implements OnInit {
  constructor(private _Router:Router){}

  checkLostedToken()
  {
    const token=localStorage.getItem('token')
    if(token!=null)
    {
      this._Router.navigate(['/lostedObectedForm'])
    }else
    {
      alert('You need to sign in first')
      this._Router.navigate(['/login'])
    }
  }
  ngOnInit(): void {
    
  }

}

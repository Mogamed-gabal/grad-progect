import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-lostedpeoble',
  templateUrl: './lostedpeoble.component.html',
  styleUrls: ['./lostedpeoble.component.css']
})
export class LostedpeobleComponent implements OnInit {
constructor(private _Router:Router){}

navigateToPage()
{
  this ._Router.navigate(['/Lostedone'])
}
checkLostedToken()
  {
    const token=localStorage.getItem('token')
    if(token!=null)
    {
      this._Router.navigate(['/adddetails'])
    }else
    {
      alert('You need to sign in first')
      this._Router.navigate(['/login'])
    }
  }

ngOnInit(): void {
  
}

}

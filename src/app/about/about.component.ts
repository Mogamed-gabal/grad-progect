import { Route, Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
constructor(private _Router:Router){

}
navigateToCreator()
{
  this._Router.navigate(['/pageaboutcontainer/pagecreator'])
}
navigateToServices()
{
  this._Router.navigate(['/pageaboutcontainer/pageservices'])
}
navigateToAims()
{
  this._Router.navigate(['/pageaboutcontainer/pageaims'])
}
ngOnInit(): void {
  
}
}

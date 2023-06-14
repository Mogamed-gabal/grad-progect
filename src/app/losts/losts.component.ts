import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-losts',
  templateUrl: './losts.component.html',
  styleUrls: ['./losts.component.css']
})
export class LostsComponent implements OnInit {
  constructor(private _Router:Router)
  {
  }

  navigateToPeoble()
  {
    this ._Router.navigate(['/lostedpeoble'])
  }
  navigateToLosted()
  {
    this ._Router.navigate(['/lostedObjects'])
  }
  ngOnInit(): void {
    
  }
}

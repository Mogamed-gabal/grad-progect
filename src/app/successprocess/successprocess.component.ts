import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successprocess',
  templateUrl: './successprocess.component.html',
  styleUrls: ['./successprocess.component.css']
})
export class SuccessprocessComponent implements OnInit {
  constructor(private _Router:Router){}
  backHome()
  {
    this ._Router.navigate(['/home'])
  }

  ngOnInit(): void {
    
  }
}

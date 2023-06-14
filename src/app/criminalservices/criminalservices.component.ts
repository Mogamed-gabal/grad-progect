import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criminalservices',
  templateUrl: './criminalservices.component.html',
  styleUrls: ['./criminalservices.component.css']
})
export class CriminalservicesComponent implements OnInit {
 
  constructor(private Router:Router){}
  checkCriminalToken()
  {
    const token=localStorage.getItem('token')
    if(token!=null)
    {
      this.Router.navigate(['/Criminalanalogy'])
    }else
    {
      alert('You need to sign in first')
      this.Router.navigate(['/login'])
    }
  }
  checkRebortsToken()
  {
    const token=localStorage.getItem('token')
    if(token!=null)
    {
      this.Router.navigate(['/PoliceReports'])
    }else
    {
      alert('You need to sign in first')
      this.Router.navigate(['/login'])
    }
  }

  ngOnInit(): void {
    
  } 
}

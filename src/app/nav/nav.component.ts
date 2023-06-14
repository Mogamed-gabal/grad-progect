import { UsersService } from './../users.service';
import { Component,OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit , OnChanges  {
  constructor(private UsersService:UsersService,private Router:Router){}
  decodedToken:any
  usreName:string=''
  userImg:string=''
  isLogin:boolean=false;
  LogOut:boolean=false;
  localContent:any;
  showData:Boolean=false
  imgPrefix='https://policia.onrender.com/'
  // const token=localStorage.getItem('token')
  //  this.AuthService.userData.subscribe({
  //   next:()=>{
  //     if(this.AuthService.userData.getValue() !=null)
  //     {
  //       this.isLogin=true
  //        this.decodedTokenn=jwtDecode(JSON.stringify(token) )
  //        this.userName=this.decodedTokenn.name
  //     }else if(localStorage.getItem('token') !=null)

  //     {
  //     this.AuthService.sveUserData()
  //     }else if(this.AuthService.userData==null)
  //     {
  //       this.isLogin=false
  //     }
  //   }
  //  })
  display()
  {

    this.localContent=localStorage.getItem('token')
    const token=localStorage.getItem('token')
    this.UsersService.userData.subscribe({
      next:()=>{
        
        if(this.UsersService.userData.getValue()!=null)
    { 
      this.showData=true
      this.LogOut=true
      this.isLogin=false
      this.decodedToken=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
      this.usreName=this.decodedToken.full_name
      this.userImg=this.decodedToken.img

    }else if(this.localContent!=null)
    {
      this.UsersService.sveUserData()
    }
    else
    {
      this.LogOut=false
      this.isLogin=true
    }
      }
    })
    
  }
dosplay()
{
      this.showData=false
      this.LogOut=false
      this.isLogin=true
      localStorage.removeItem('token')
      localStorage.removeItem('decodeToken')
      this.Router.navigate(['/home'])
}

  
  ngOnInit(): void {
    this.display()
    this.UsersService.sveUserData()
    
}

ngOnChanges():void{

}
}

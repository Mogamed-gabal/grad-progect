import { Component,OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
declare var MediaStreamTrack: any;
declare var navigator: any;
@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.css']
})
export class CamComponent implements OnInit {

 

  constructor() { }

    videoOptions = {
      width: 10,
      height: 10,
      fps: 90
    };
    
    handleImageCapture(event:any) {
    }
  
  

  ngOnInit(): void {
    
  }
}


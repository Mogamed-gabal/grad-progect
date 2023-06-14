import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcunterService {
counter=0;
  constructor() { }

  findNumOfVisitors()
  {
    this.counter++;
  }
}

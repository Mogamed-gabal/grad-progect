import { AppComponent } from './app.component';
import { Pipe, PipeTransform, Component } from '@angular/core';

@Pipe({
  name: 'slication'
})
export class SlicationPipe implements PipeTransform {

  transform(h2: string): string {
    return h2.split('').slice(0,10).join('');
  }
  constructor(private _AppComponent:Component){
    
  }

}

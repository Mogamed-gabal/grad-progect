import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objects'
})
export class ObjectsPipe implements PipeTransform {

  transform(losted:any[],term:string): any {
    return losted.filter((n)=>n.fullName.toLowerCase().includes(term.toLocaleLowerCase()));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const result = [];
    for(const evento of value){
      if(evento.title.toLowerCase().indexOf(args.toLowerCase()) > -1){
        result.push(evento);

      }

    };
    return result;
  }

}

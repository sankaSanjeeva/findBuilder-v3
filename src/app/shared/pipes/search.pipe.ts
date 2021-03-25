import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: string[], searchText: string): unknown {
    if (!items) return [];
    if (!searchText) return items;
    
    return items.filter(x => {
      return x.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}

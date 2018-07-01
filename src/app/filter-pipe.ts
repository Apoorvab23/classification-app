import { Pipe, PipeTransform } from '@angular/core';

import { ClassificationItem } from './ClassificationItem';

@Pipe({
    name: 'filterargs',
    pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: ClassificationItem[], filter: ClassificationItem): ClassificationItem[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: ClassificationItem) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {ClassificationItem} item
   * @param {ClassificationItem} filter
   * @return {boolean}
   */
 applyFilter(item: ClassificationItem, filter: ClassificationItem): boolean {
    for (let field in filter) {
  //    console.log(field+"-field");
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (item[field].toString().indexOf(filter[field]) === -1) {
      //      console.log("25-Jun-2018 12:30PM,15-Jun-2018 02:30 PM".indexOf("Jun"));
        //    console.log("item[field]-"+item[field]);
          //    console.log("filter[field]-"+filter[field]);
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (item[field] !== filter[field]) {
          //  console.log("item[field]-"+ClassificationItem[field]);
            //console.log("filter[field]-"+filter[field]);
            return false;
          }
        }
      }
    }
    return true;
  }
}

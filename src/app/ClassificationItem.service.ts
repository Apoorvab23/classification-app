import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ClassificationItem } from './ClassificationItem';

@Injectable()
export class ClassificationItemService {

  constructor(private http: Http) {
  }

  /**
   *
   *
   * @return {Observable<ClassificationItem[]>}
   */
  getList(): Observable<ClassificationItem[]> {
      //console.log(document.location.href);
    return this.http.get('assets/list.json')
      .map((res : Response) => res.json().data)
      .catch((error : any) => {
        return Observable.throw(error.statusText);
      });
    //
  }
}

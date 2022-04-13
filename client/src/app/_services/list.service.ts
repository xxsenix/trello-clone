import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Card } from '../_models/card';
import { List } from '../_models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listsChanged = new Subject<List[]>();
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  private lists: List[] = []

  constructor(private http: HttpClient) { }

  // fetchLists(id: number) {
  //   return this.http.get<List[]>(`${environment.apiUrl}/board/${id}/lists`)
  //     .pipe(
  //       tap(lists => {
  //         this.setLists(lists)
  //       })
  //     )
  // }

  // fetchLists(id: number) {
  //   return this.http.get<List[]>(`${environment.apiUrl}/board/${id}/lists`);
  // }

  // setLists(lists: List[]) {
  //   this.lists = lists;
  //   this.listsChanged.next(this.lists.slice());
  // }

  // getLists() {
  //   return this.lists.slice();
  // }

  // addList(list: List) {
  //   return this.http.post<List>(`${environment.apiUrl}/list`, list);
  // }

  
  // addList(list: List) {
  //   return this.http
  //     .post<Card>(`${environment.apiUrl}/list`, list)
  //     .pipe(
  //       tap(() => {
  //         this.refreshNeeded$.next();
  //       })
  //     )
  // }

  // updateLists(list: List) {
  //   this.lists.push(list);
  //   this.listsChanged.next(this.lists.slice());
  // }


  getLists(id: number) {
    return this.http.get<List[]>(`${environment.apiUrl}/board/${id}/lists`).pipe(tap(lists => {
      this.setLists(lists);
    }))
  }

  getList(id: number) {
    return this.http.get<List>(`${environment.apiUrl}/list/${id}`)
  }  

  addList(list: List) {
    return this.http.post<List>(`${environment.apiUrl}/list`, list)
  }

  updateLists(list: List) {
    this.lists.push(list);
    this.listsChanged.next(this.lists.slice());
  }

  setLists(lists: List[]) {
    this.lists = lists;
    this.listsChanged.next(this.lists.slice());
  }
}

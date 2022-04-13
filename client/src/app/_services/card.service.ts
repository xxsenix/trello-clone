import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Card } from '../_models/card';
import { Comment } from '../_models/comment';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardChanged = new Subject<Card>();
  private card: Card;
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }


  constructor(private http: HttpClient, private listService: ListService) { }

  // fetchCard(id: number) {
  //   return this.http.get<Card>(`${environment.apiUrl}/card/${id}`)
  //     .pipe(
  //       tap(card => {
  //         this.setCard(card)
  //       })
  //     )
  // }
  fetchCard(id: number) {
    return this.http.get<Card>(`${environment.apiUrl}/card/${id}`)
  }
  
  // setCard(card: Card) {
  //   this.card = card;
  //   const cardCopy = Object.assign({}, this.card)
  //   this.cardChanged.next(cardCopy);
  // }

  // getCard() {
  //   const cardCopy = Object.assign({}, this.card)
  //   return cardCopy;
  // }

  updateCard(id: number, card: Card) {
    return this.http.post<Card>(`${environment.apiUrl}/card/${id}`, card).subscribe();
  }

  addCard(card: Card) {
    return this.http
      .post<Card>(`${environment.apiUrl}/card`, card)
      .pipe(
        tap(() => {
          this.listService.refreshNeeded$.next();
        })
      )
  }
  addComment(comment: Comment) {
    return this.http
      .post<Comment>(`${environment.apiUrl}/comment`, comment)
      .pipe(
        tap(() => {
          this.refreshNeeded$.next();
        })
      )
  }
}

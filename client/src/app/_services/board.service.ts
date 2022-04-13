import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Board } from '../_models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardsChanged = new Subject<Board[]>();
  boardTitle: string;

  private boards: Board[] = [];

  constructor(private http: HttpClient) { }

  getBoards() {
    return this.http.get<Board[]>(`${environment.apiUrl}/board`).pipe(tap(boards => {
      this.setBoards(boards);
    }))
  }

  getBoard(id: number) {
    return this.http.get<Board>(`${environment.apiUrl}/board/${id}`)
  }  

  addBoard(board: Board) {
    return this.http.post<Board>(`${environment.apiUrl}/board`, board)
  }

  updateBoards(board: Board) {
    this.boards.push(board);
    this.boardsChanged.next(this.boards.slice());
  }

  setBoards(boards: Board[]) {
    this.boards = boards;
    this.boardsChanged.next(this.boards.slice());
  }
}

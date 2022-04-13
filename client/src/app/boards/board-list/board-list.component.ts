import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Board } from 'src/app/_models/board';
import { BoardService } from 'src/app/_services/board.service';
import { BoardEditComponent } from '../board-edit/board-edit.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards: Board[]; 

  constructor(private boardService: BoardService, private dialog: MatDialog) { }
 
  ngOnInit(): void {
    this.boardService.getBoards().subscribe(boards => {
      this.boards = boards;
    });
  }
  
  openAddBoardDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "25%";
    this.dialog.open(BoardEditComponent, dialogConfig);
  }
}

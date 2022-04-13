import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Board } from 'src/app/_models/board';
import { BoardService } from 'src/app/_services/board.service';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})
export class BoardEditComponent implements OnInit {
  model: Board = {
    title: null,
    description: null,
    isPrivate: false
  };

  constructor(private boardService: BoardService, public dialogRef: MatDialogRef<BoardEditComponent>) { }

  ngOnInit(): void {
  }

  addBoard() {
    this.boardService.addBoard(this.model).subscribe(response => {
      this.boardService.updateBoards(response)
      this.onClose();
    }, error => {
      console.log(error)
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}

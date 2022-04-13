import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ListService } from 'src/app/_services/list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/_models/list';
import { Card } from 'src/app/_models/card';
import { CardService } from 'src/app/_services/card.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CardEditComponent } from 'src/app/cards/card-edit/card-edit.component';
import { ListEditComponent } from '../list-edit/list-edit.component';
import { BoardService } from 'src/app/_services/board.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id: number;
  boardTitle: string;
  lists: List[]

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private cardService: CardService,
    private boardService: BoardService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +[params['boardId']];
          this.boardService.getBoard(this.id).subscribe(board => {
            this.boardTitle = board.title;
          })
          this.updateLists();
        }
      )
    this.listService.refreshNeeded$.subscribe(() => {
      this.updateLists();
    })  
  }

  openAddCardDialog(listId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "25%";
    let dialogRef = this.dialog.open(CardEditComponent, dialogConfig);
    dialogRef.componentInstance.model.list_id = listId;
  }
  
  openAddListDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "25%";
    let dialogRef = this.dialog.open(ListEditComponent, dialogConfig);
    dialogRef.componentInstance.model.board_id = this.id;
  }

  navigateToCardDetail(id) {
    this.router.navigate([`${id}`], { relativeTo: this.route })
  }

  onDrop(event: CdkDragDrop<Card[]>) {
    const cardId = event.item.data.id;
    const listId = parseInt(event.container.id);
    const card = event.item.data;
    card.list_id = listId;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.cardService.updateCard(cardId, card);
    }
  }

  updateLists() {
    this.listService.getLists(this.id).subscribe(lists => {
      this.lists = lists;
    });
  }
}
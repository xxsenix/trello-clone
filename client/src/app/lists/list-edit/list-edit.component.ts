import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { List } from 'src/app/_models/list';
import { ListService } from 'src/app/_services/list.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  model: List = {
    title: null,
    board_id: null
  };

  constructor(private listService: ListService, public dialogRef: MatDialogRef<ListEditComponent>) { }

  ngOnInit(): void {
  }

  addList() {
    this.listService.addList(this.model).subscribe(response => {
      this.listService.updateLists(response);
      this.onClose();
    }, error => {
      console.log(error)
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}

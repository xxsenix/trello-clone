import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/_models/card';
import { List } from 'src/app/_models/list';
import { CardService } from 'src/app/_services/card.service';
import { ListService } from 'src/app/_services/list.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  model: Card = {
    title: null,
    description: null,
    list_id: null,
  };

  constructor(private cardService: CardService, public dialogRef: MatDialogRef<CardEditComponent>) {
    
  }
  
  ngOnInit(): void {
  }

  addCard() {
    this.cardService.addCard(this.model).subscribe(() => {
      this.onClose();
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}

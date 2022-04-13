import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Card } from 'src/app/_models/card';
import { Comment } from 'src/app/_models/comment';
import { CardService } from 'src/app/_services/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  model: Comment = {
    body: null,
    card_id: null
  }
  card: Card;
  id: number;

  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +[params['cardId']]
          this.model.card_id = this.id;
          this.updateCard()
        }
      )
      this.cardService.refreshNeeded$.subscribe(() => {
        this.updateCard()
      })    
  }

  addComment(form: NgForm) {
    this.cardService.addComment(this.model).subscribe(() => form.reset())
  }

  updateCard() {
    return this.cardService.fetchCard(this.id).subscribe(
      (card) => {
        this.card = card;
      }
    )
  }
}

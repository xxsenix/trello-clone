import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from 'src/app/_models/board';
import { List } from 'src/app/_models/list';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
  @Input() board: Board;
  lists: List[];

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  
  navigateToList(id: number) {
      this.router.navigate([`${id}/lists`], {relativeTo: this.route})
  }
}

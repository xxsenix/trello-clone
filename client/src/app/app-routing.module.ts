import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListComponent } from './boards/board-list/board-list.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';
import { ListComponent } from './lists/list/list.component';

const routes: Routes = [
  {path: 'boards', component: BoardListComponent},
  {path: 'boards/:boardId/lists', component: ListComponent},
  {path: 'boards/:boardId/lists/:cardId', component: CardDetailComponent},
  {path: '**', redirectTo: '/boards', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

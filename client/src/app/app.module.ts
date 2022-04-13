import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { BoardListComponent } from './boards/board-list/board-list.component';
import { RandomColorDirective } from './_directives/random-color.directive';
import { TokenInterceptor } from './_interceptors/token.interceptor';
import { BoardItemComponent } from './boards/board-item/board-item.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BoardEditComponent } from './boards/board-edit/board-edit.component';
import { ListComponent } from './lists/list/list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardEditComponent } from './cards/card-edit/card-edit.component';
import { ListEditComponent } from './lists/list-edit/list-edit.component';
import { BoardService } from './_services/board.service';
import { ListService } from './_services/list.service';
import { CardService } from './_services/card.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginFormComponent,
    RegisterFormComponent,
    BoardListComponent,
    RandomColorDirective,
    BoardItemComponent,
    CardDetailComponent,
    BoardEditComponent,
    ListComponent,
    CardEditComponent,
    ListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule, 
    FlexLayoutModule,
    DragDropModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent]
})
export class AppModule { }

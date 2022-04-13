import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginFormComponent } from '../auth/login-form/login-form.component';
import { RegisterFormComponent } from '../auth/register-form/register-form.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "25%";
    this.dialog.open(LoginFormComponent, dialogConfig);
  }

  openRegisterDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "25%";
    this.dialog.open(RegisterFormComponent, dialogConfig);
  }

  logout() {
    this.accountService.logout();
  }
}

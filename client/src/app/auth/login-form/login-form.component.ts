import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService, public dialogRef: MatDialogRef<LoginFormComponent>) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.onClose();
    }, error => {
      console.log(error)
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}

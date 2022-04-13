import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService, public dialogRef: MatDialogRef<RegisterFormComponent>) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.onClose();
    }, error => {
      console.log(error)
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}

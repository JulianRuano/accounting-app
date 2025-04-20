import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule, ButtonComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginFail: boolean = false;
  invalidForm: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginFail = false;
    } else {
      this.invalidForm = true;
    }
  }

}

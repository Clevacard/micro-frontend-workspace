import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  styleUrls: ['./login.scss']
})
export class Login {
  username = '';
  password = '';
  loginFailed = false;
  isLogin = false;


  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.isLogin = true;
      console.log('Login successful');
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true;
    }
  }
}
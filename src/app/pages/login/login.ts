import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LoginResponseObject } from '../../models/LoginResponseObject.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  authService = inject(AuthService);
  router = inject(Router);

  loginObj: any ={
    userName: "",
    password: ""
  }

  onLogin() {
    this.authService.login(this.loginObj).subscribe({
      next: (res: LoginResponseObject) => {
        // store token
        localStorage.setItem("token", res.token);
        console.log(res);
        // navigate after success
        this.router.navigateByUrl("/dashboard");
      },
      error: (err) => {
        console.error("Login failed", err);
        alert("Invalid username or password");
      }
    });
  }

}

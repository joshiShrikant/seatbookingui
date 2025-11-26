import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  
  registerObj: any = {
    "firstName": "Shrikant",
    "lastName": "joshi",
    "email": "joshi@gmail.com",
    "userName": "test",
    "password": "pass"
  };

  authService = inject(AuthService);
  router = inject(Router);

  onRegister() {
    this.authService.register(this.registerObj).subscribe({
      next: (res: any) => {
        // store token
        localStorage.setItem("token", res.token);
        console.log(res);
        // navigate after success
        this.router.navigateByUrl("login");
      },
      error: (err) => {
        console.error("Login failed", err);
        alert("Invalid form details");
      }
    });
  }

}

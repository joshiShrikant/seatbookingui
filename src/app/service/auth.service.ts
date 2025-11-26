import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SeatModel } from '../models/seat.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponseObject } from '../models/LoginResponseObject.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://localhost:8080/api/auth";

  http = inject(HttpClient);
  router = inject(Router);

  // login(): Observable<SeatModel[]> {
  //   return this.http.post<SeatModel[]>(this.baseUrl + "Login", this.loginObj);
  // }

  register(registerObj: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + "/register", registerObj);
  }

  login(loginObj: any): Observable<LoginResponseObject> {
    return this.http.post<any>(this.baseUrl + "/login", loginObj);
  }
}

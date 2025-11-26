import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeatModel } from '../models/seat.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  baseUrl: string = "http://localhost:8080/api";
  seatUrl: string = "http://localhost:8080/api/seats"

  http = inject(HttpClient);


  getSeats(): Observable<SeatModel[]> {
    return this.http.get<SeatModel[]>(this.baseUrl+"/bookings/myBookings");
  }

  // TODO: service endpoint is not ready
  addSeat(seat: SeatModel): Observable<any> { 
    return this.http.post<any>(this.baseUrl + "/bookings/addSeat", seat);
  }

    // TODO: service endpoint is not ready
  updateSeat(seat: SeatModel) {
    // const index = this.seats.findIndex(e => e.id === emp.id);
    // if (index !== -1) {
    //   this.seats[index] = emp;
    //   this.seatSubject.next(this.seats);
    // }
  }
  // TODO: service endpoint is not ready
  deleteSeat(id: number) {
    // this.seats = this.seats.filter(e => e.id !== id);
    // this.seatSubject.next(this.seats);
  }

  //// 

    getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/admin/users/getAllUsers");
  }

  getAllSeats(): Observable<SeatModel[]> {
    return this.http.get<SeatModel[]>(this.baseUrl + "/seats/getAllSeats");
  }

  

  bookMySeat(bookObj : any): Observable<any> {
    return this.http.post(this.baseUrl + "/bookings/bookMySeat", bookObj);
  }

  releaseSeat(bookObj : any): Observable<any> {
    return this.http.post(this.baseUrl + "/bookings/releaseMySeat", bookObj);
  }


}

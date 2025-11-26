import { Component, OnInit } from '@angular/core';
import { Seat } from '../seat/seat';
import { SeatService } from '../../service/seat.service';
import { SeatModel } from '../../models/seat.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {

  seats: SeatModel[] = [];
  selectedEmployee: any;
  employees: any[] = [];

  floorId: number = 16;

  bookObj: any = {
    seatId: 0,
    userId: 0,
    bookingDate: new Date(),
    bookingTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  }

  constructor(private seatService: SeatService) { }

  ngOnInit() {
    this.loadAllUsers();
    this.loadAllSeats();
  }

  loadAllSeats() {
    this.seatService.getAllSeats().subscribe(res => {
      console.log(res);
      this.seats = res;
    });
  }

  loadAllUsers() {
    this.seatService.getAllUsers().subscribe(res => {
      console.log(res);
      this.employees = res;
    });
  }

  bookForUser(seat: any) {
    console.log(seat);

    if (!this.selectedEmployee) {
      alert("Select a user");
      return;
    }
    this.bookObj.seatId = seat.id;
    this.bookObj.userId = this.selectedEmployee;
    console.log(seat);
    this.seatService.bookMySeat(this.bookObj)
      .subscribe(() => this.loadAllSeats());
  }

  release(seat: any) {
    this.seatService.releaseSeat(seat.id)
      .subscribe(() => this.loadAllSeats());
  }
}
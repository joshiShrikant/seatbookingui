import { Component, OnInit } from '@angular/core';
import { SeatService } from '../../service/seat.service';
import { SeatModel } from '../../models/seat.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-my-seat',
  imports: [CommonModule],
  templateUrl: './book-my-seat.html',
  styleUrl: './book-my-seat.scss',
})
export class BookMySeat implements OnInit {

  seats: SeatModel[] = [];
  userId: number = 0; // logged-in user’s id
  floorId: number = 0;
  seatObj : any = {

  };

  constructor(private seatService: SeatService){}

  ngOnInit() {
    this.loadSeats();
  }

  loadSeats() {
    this.seatService.getAllSeats().subscribe(res => {
      this.seats = res;
    });
  }

  isMySeat(seat: any) {
    return seat.id === this.userId?.toString();
  }

  bookSeat(seat: any) {
    this.seatService.bookMySeat(this.seatObj).subscribe(() => {
      this.loadSeats();
    });
  }

  releaseSeat(seat: any) {
    this.seatService.releaseSeat(seat.id).subscribe(() => {
      this.loadSeats();
    });
  }
}
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeatModel } from '../../models/seat.model';
import { SeatService } from '../../service/seat.service';

@Component({
  selector: 'app-seat',
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './seat.html',
  styleUrl: './seat.scss',
})
export class Seat  implements OnInit {

  seatForm!: FormGroup;
  seats: SeatModel[] = [];
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private seatService: SeatService
  ) { }

  ngOnInit(): void {
    this.seatForm = this.fb.group({
      id: [''],
      seatNumber: ['', Validators.required],
      floorName: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.seatService.getSeats()
      .subscribe(res => {
        this.seats = res;
      });
    console.log("this", this.seats);
  }

  submitForm() {
    const formValue = this.seatForm.value;

    if (this.isEditMode) {
      this.seatService.updateSeat(formValue);
      this.isEditMode = false;
    } else {
      this.seatService.addSeat(formValue);
    }

    this.seatForm.reset();
  }

  editSeat(emp: SeatModel) {
    this.isEditMode = true;
    this.seatForm.patchValue(emp);
  }

  deleteSeat(id: number) {
    this.seatService.deleteSeat(id);
  }
}
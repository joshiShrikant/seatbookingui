import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeModel } from '../../models/employee.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee implements OnInit {

  employeeForm!: FormGroup;
  employees: EmployeeModel[] = [];
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: [''],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['password', Validators.required]
    });
    console.log("this", this.employees);

    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employees = res;
      });
    console.log("this", this.employees);
  }

  submitForm() {
    const formValue = this.employeeForm.value;

    if (this.isEditMode) {
      this.employeeService.updateEmployee(formValue);
      this.isEditMode = false;
    } else {
      this.employeeService.addEmployee(formValue);
    }

    this.employeeForm.reset();
  }

  editEmployee(emp: EmployeeModel) {
    this.isEditMode = true;
    this.employeeForm.patchValue(emp);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }
}
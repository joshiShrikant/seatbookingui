import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: EmployeeModel[] = [
    { id: 1, FirstName: 'John ', LastName: "deo", userName: "johnDeo", email: 'johnD@gmail.com', password: "pass"},
    { id: 2, FirstName: 'John ', LastName: "sinha", userName: "johnSinha", email: 'johnS@gmail.com', password: "pass"},
  ];

  private employeeSubject = new BehaviorSubject<EmployeeModel[]>(this.employees);

  getEmployees(): Observable<EmployeeModel[]> {
    return this.employeeSubject.asObservable();
  }

  addEmployee(emp: EmployeeModel) {
    emp.id = new Date().getTime(); // mock id
    this.employees.push(emp);
    this.employeeSubject.next(this.employees);
  }

  updateEmployee(emp: EmployeeModel) {
    const index = this.employees.findIndex(e => e.id === emp.id);
    if (index !== -1) {
      this.employees[index] = emp;
      this.employeeSubject.next(this.employees);
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
    this.employeeSubject.next(this.employees);
  }
}

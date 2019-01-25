import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input()
  employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    /** console.log(empForm.value);*/
  }
}

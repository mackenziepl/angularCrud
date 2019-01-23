import { Component, OnInit } from '@angular/core';
/** import { getMaxListeners } from 'cluster';*/
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contractPreference: 'Email',
      email: 'mark@getMaxListeners.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contractPreference: 'Phone',
      phoneNumber: 48123456789,
      dateOfBirth: new Date('11/20/1978'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contractPreference: 'Phone',
      phoneNumber: 48987654321,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: '/angular-Crud/src/assets/images/john.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

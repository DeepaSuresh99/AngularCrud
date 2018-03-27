import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Department} from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  dateOfBirth: Date = new Date();
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: new Date(),
    department: 'select',
    isActive: null,
    photoPath: null,
  };
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Pay Roll'},
    {id: 5, name: 'Admin'}
  ];
  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY'
    } );
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}

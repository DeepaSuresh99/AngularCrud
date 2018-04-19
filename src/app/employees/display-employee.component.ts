import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  private _employee: Employee;
  @Input()
  set employee(val: Employee) {
    console.log( 'Set: ' + val);
    console.log('Previous : ' + (this._employee ? this._employee : 'NULL'));
    console.log('Current : ' + val.name);
    this._employee = val;
  }
  get employee(): Employee {
    console.log( 'Get called');
    return this._employee;
  }
  constructor() { }

  ngOnInit() {
  }


}

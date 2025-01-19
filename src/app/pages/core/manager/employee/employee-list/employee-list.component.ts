import {Component, OnInit} from '@angular/core';
import {EmployeesHttpService} from '@servicesHttp/core';
import {PrimeIcons} from 'primeng/api';
import {EmployeeModel} from "@models/core/employee.model";
import {UserModel} from "@models/auth";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  items: EmployeeModel[] = [];
  selectedItem!: EmployeeModel;
  employeeModal: boolean = false;
  isNew: boolean = false;


  constructor(private employeesHttpService: EmployeesHttpService) {
  }

  ngOnInit(): void {
    this.findEmployees();
  }

  findEmployees(): void {
    this.employeesHttpService.findAll().subscribe(
      (response: EmployeeModel[]) => {
        console.log(response);
        this.items = response;
      }
    );
  }

  createEmployeeModal(): void {
    this.isNew = true;
    this.employeeModal = true;
  }

  editEmployeeModal(item: EmployeeModel): void {
    this.selectedItem = item;
    this.isNew = false;
    this.employeeModal = true;
  }

  disableEmployee(id: string): void {
    this.employeesHttpService.disable(id).subscribe(
      (response) => {
        this.findEmployees();
      }
    )
  }

  enableEmployee(id: string): void {
    this.employeesHttpService.enable(id).subscribe(
      (response) => {
        this.findEmployees();
      }
    )
  }

  protected readonly PrimeIcons = PrimeIcons;
}

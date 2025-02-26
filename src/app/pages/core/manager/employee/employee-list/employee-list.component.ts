import {Component, inject, OnInit} from '@angular/core';
import {EmployeesHttpService, SchedulesHttpService} from '@servicesHttp/core';
import {PrimeIcons} from 'primeng/api';
import {EmployeeModel} from "@models/core/employee.model";
import {FormControl} from "@angular/forms";
import {ScheduleModel, SelectScheduleDto} from "@models/core";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  private employeesHttpService = inject(EmployeesHttpService);
  private schedulesHttpService = inject(SchedulesHttpService);
  items: EmployeeModel[] = [];
  itemsClone: EmployeeModel[] = [];
  selectedItem!: EmployeeModel;
  scheduleControl: FormControl = new FormControl<any>(null);
  employeeModal: boolean = false;
  schedules: ScheduleModel[] = [];
  scheduleModal: boolean = false;
  isNew: boolean = false;
  searchControl: FormControl = new FormControl(null);

  constructor() {
    this.searchControl.valueChanges.subscribe(value => {
      this.filterEmployees();
    })
  }

  ngOnInit(): void {
    this.findEmployees();
    this.findSchedules();
  }

  findEmployees(): void {
    this.employeesHttpService.findAll().subscribe(
      (response: EmployeeModel[]) => {
        this.items = response;
        this.itemsClone = response;
      }
    );
  }

  findSchedules() {
    this.schedulesHttpService.findAll().subscribe(response => {
      this.schedules = response;
    })
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

  assignScheduleModal(item: EmployeeModel): void {
    this.selectedItem = item;
    this.scheduleControl.setValue(item.schedule);
    this.scheduleModal = true;
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

  assignSchedule() {
    this.employeesHttpService.assignSchedule(this.selectedItem.id, this.scheduleControl.value).subscribe(response => {
      this.findEmployees();
      this.scheduleModal = false;
    });
  }

  filterEmployees() {
    if (this.searchControl.value) {
      const search = this.searchControl.value.toLowerCase();
      this.items = this.itemsClone.filter(item =>
        item.user.name.toLowerCase().includes(search)
        || item.user.lastname.toLowerCase().includes(search)
        || item.user.identification.toLowerCase().includes(search)
      );
    }else{
      this.items = this.itemsClone;
    }
  }

  protected readonly PrimeIcons = PrimeIcons;
}

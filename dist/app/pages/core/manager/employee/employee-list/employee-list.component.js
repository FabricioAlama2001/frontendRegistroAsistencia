import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
let EmployeeListComponent = class EmployeeListComponent {
    constructor(employeesHttpService) {
        this.employeesHttpService = employeesHttpService;
        this.items = [];
        this.employeeModal = false;
        this.isNew = false;
        this.PrimeIcons = PrimeIcons;
    }
    ngOnInit() {
        this.findEmployees();
    }
    findEmployees() {
        this.employeesHttpService.findAll().subscribe((response) => {
            console.log(response);
            this.items = response;
        });
    }
    createEmployeeModal() {
        this.isNew = true;
        this.employeeModal = true;
    }
    editEmployeeModal(item) {
        this.selectedItem = item;
        this.isNew = false;
        this.employeeModal = true;
    }
    disableEmployee(id) {
        this.employeesHttpService.disable(id).subscribe((response) => {
            this.findEmployees();
        });
    }
    enableEmployee(id) {
        this.employeesHttpService.enable(id).subscribe((response) => {
            this.findEmployees();
        });
    }
};
EmployeeListComponent = __decorate([
    Component({
        selector: 'app-employee-list',
        templateUrl: './employee-list.component.html',
        styleUrls: ['./employee-list.component.scss']
    })
], EmployeeListComponent);
export { EmployeeListComponent };
//# sourceMappingURL=employee-list.component.js.map
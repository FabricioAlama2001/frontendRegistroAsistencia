import { __decorate } from "tslib";
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CataloguesHttpService, EmployeesHttpService } from "../../../../../services/http/core";
import { CatalogueTypeEnum } from "../../../../../shared/enums";
import { PrimeIcons } from "primeng/api";
let EmployeeFormComponent = class EmployeeFormComponent {
    constructor() {
        this.formBuilder = inject(FormBuilder);
        this.positions = [];
        this.sexes = [];
        this.cataloguesHttpService = inject(CataloguesHttpService);
        this.employeesHttpService = inject(EmployeesHttpService);
        this.PrimeIcons = PrimeIcons;
        this.savedOut = new EventEmitter(false);
    }
    ngOnInit() {
        this.buildUserForm();
        this.loadCatalogues();
        if (this.userId) {
            this.findEmployee(this.userId);
        }
    }
    buildUserForm() {
        this.form = this.formBuilder.group({
            identification: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern(/^\d{10}$/)]],
            name: ['', [Validators.required, Validators.maxLength(50)]],
            lastname: ['', [Validators.required, Validators.maxLength(50)]],
            birthdate: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            sex: [null, Validators.required],
            employee: this.employeeForm,
        });
    }
    loadCatalogues() {
        this.positions = this.cataloguesHttpService.findByType(CatalogueTypeEnum.EMPLOYEES_POSITION);
        this.sexes = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_SEX);
    }
    onSubmit() {
        if (this.form.valid) {
            if (this.userId) {
                this.updateEmployee();
            }
            else {
                this.createEmployee();
            }
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    findEmployee(userId) {
        this.employeesHttpService.findOne(userId).subscribe(response => {
            this.form.patchValue(response);
        });
    }
    createEmployee() {
        console.log(this.form.value);
        this.employeesHttpService.create(this.form.value).subscribe(response => {
            console.log(response);
            this.savedOut.emit(true);
        });
    }
    updateEmployee() {
        console.log(this.form.value);
        this.employeesHttpService.update(this.userId, this.form.value).subscribe(response => {
            console.log(response);
            this.savedOut.emit(true);
        });
    }
    get employeeForm() {
        return this.formBuilder.group({
            position: ['', [Validators.required, Validators.maxLength(50)]],
        });
    }
    get identificationField() {
        return this.form.controls['identification'];
    }
    get employeeFormField() {
        return this.form.controls['user'];
    }
    get positionField() {
        return this.employeeFormField.controls['position'];
    }
};
__decorate([
    Input()
], EmployeeFormComponent.prototype, "userId", void 0);
__decorate([
    Output()
], EmployeeFormComponent.prototype, "savedOut", void 0);
EmployeeFormComponent = __decorate([
    Component({
        selector: 'app-employee-form',
        templateUrl: './employee-form.component.html',
        styleUrls: ['./employee-form.component.scss']
    })
], EmployeeFormComponent);
export { EmployeeFormComponent };
//# sourceMappingURL=employee-form.component.js.map
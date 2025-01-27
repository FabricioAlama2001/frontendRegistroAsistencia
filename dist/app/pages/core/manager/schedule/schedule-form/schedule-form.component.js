import { __decorate } from "tslib";
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SchedulesHttpService } from "../../../../../services/http/core/schedules-http.service";
import { PrimeIcons } from 'primeng/api';
let ScheduleFormComponent = class ScheduleFormComponent {
    constructor() {
        this.formBuilder = inject(FormBuilder);
        this.employees = [];
        this.days = [];
        this.schedulesHttpService = inject(SchedulesHttpService);
        this.PrimeIcons = PrimeIcons;
        this.savedOut = new EventEmitter(false);
    }
    ngOnInit() {
        this.buildScheduleForm();
        this.loadEmployees();
        this.loadDays();
        if (this.scheduleId) {
            this.findSchedule(this.scheduleId);
        }
    }
    buildScheduleForm() {
        this.form = this.formBuilder.group({
            employee: [null, Validators.required],
            day: [null, Validators.required],
            startTime: [null, Validators.required],
            endTime: [null, Validators.required],
        });
    }
    loadEmployees() {
        this.schedulesHttpService.findEmployees().subscribe((employees) => {
            this.employees = employees;
        });
    }
    loadDays() {
        this.schedulesHttpService.findDays().subscribe((days) => {
            this.days = days;
        });
    }
    onSubmit() {
        if (this.form.valid) {
            if (this.scheduleId) {
                this.updateSchedule();
            }
            else {
                this.createSchedule();
            }
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    findSchedule(scheduleId) {
        this.schedulesHttpService.findOne(scheduleId).subscribe((response) => {
            this.form.patchValue(response);
        });
    }
    createSchedule() {
        this.schedulesHttpService.create(this.form.value).subscribe(() => {
            this.savedOut.emit(true);
        });
    }
    updateSchedule() {
        this.schedulesHttpService.update(this.scheduleId, this.form.value).subscribe(() => {
            this.savedOut.emit(true);
        });
    }
    get employeeField() {
        return this.form.controls['employee'];
    }
    get dayField() {
        return this.form.controls['day'];
    }
    get startTimeField() {
        return this.form.controls['startTime'];
    }
    get endTimeField() {
        return this.form.controls['endTime'];
    }
};
__decorate([
    Input()
], ScheduleFormComponent.prototype, "scheduleId", void 0);
__decorate([
    Output()
], ScheduleFormComponent.prototype, "savedOut", void 0);
ScheduleFormComponent = __decorate([
    Component({
        selector: 'app-schedule-form',
        templateUrl: './schedule-form.component.html',
        styleUrls: ['./schedule-form.component.scss']
    })
], ScheduleFormComponent);
export { ScheduleFormComponent };
//# sourceMappingURL=schedule-form.component.js.map
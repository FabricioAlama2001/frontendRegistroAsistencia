import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendaceFormComponent } from './attendace-form/attendace-form.component';
import { AttendaceListComponent } from './attendace-list/attendace-list.component';
let AttendanceModule = class AttendanceModule {
};
AttendanceModule = __decorate([
    NgModule({
        declarations: [
            AttendaceFormComponent,
            AttendaceListComponent
        ],
        imports: [
            CommonModule,
            AttendanceRoutingModule
        ]
    })
], AttendanceModule);
export { AttendanceModule };
//# sourceMappingURL=attendance.module.js.map
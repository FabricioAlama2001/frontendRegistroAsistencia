import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ScheduleAssignmentComponent } from './schedule-assignment/schedule-assignment.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "@shared/shared.module";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {TagModule} from "primeng/tag";


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
    ScheduleAssignmentComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    PanelModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    SharedModule,
    TableModule,
    DialogModule,
    TagModule
  ]
})
export class EmployeeModule { }

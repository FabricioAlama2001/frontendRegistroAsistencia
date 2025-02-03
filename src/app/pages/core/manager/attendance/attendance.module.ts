import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import {PanelModule} from "primeng/panel";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";
import {DropdownModule} from "primeng/dropdown";
import {CheckboxModule} from "primeng/checkbox";
import {CalendarModule} from "primeng/calendar";
import {InputSwitchModule} from "primeng/inputswitch";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";


@NgModule({
  declarations: [
    AttendanceFormComponent,
    AttendanceListComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    PanelModule,
    ReactiveFormsModule,
    SharedModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    InputSwitchModule,
    DialogModule,
    TableModule,
    TagModule
  ]
})
export class AttendanceModule { }

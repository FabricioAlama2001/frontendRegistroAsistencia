import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "@shared/shared.module";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {TagModule} from "primeng/tag";
import {DividerModule} from "primeng/divider";


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
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
        TagModule,
        DividerModule
    ]
})
export class EmployeeModule { }

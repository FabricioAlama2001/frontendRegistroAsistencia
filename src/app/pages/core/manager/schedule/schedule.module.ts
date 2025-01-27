import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {SharedModule} from "@shared/shared.module";
import {InputMaskModule} from "primeng/inputmask";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";


@NgModule({
  declarations: [
    ScheduleFormComponent,
    ScheduleListComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    ReactiveFormsModule,
    PanelModule,
    DropdownModule,
    CalendarModule,
    SharedModule,
    InputMaskModule,
    TableModule,
    DialogModule,
    InputNumberModule
  ]
})
export class ScheduleModule { }

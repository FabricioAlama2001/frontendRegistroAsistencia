import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendaceFormComponent } from './attendace-form/attendace-form.component';
import { AttendaceListComponent } from './attendace-list/attendace-list.component';


@NgModule({
  declarations: [
    AttendaceFormComponent,
    AttendaceListComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }

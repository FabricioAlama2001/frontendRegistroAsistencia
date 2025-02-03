import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AttendanceListComponent} from "./attendance-list/attendance-list.component";
import {AttendanceFormComponent} from "./attendance-form/attendance-form.component";

const routes: Routes = [
  {
    path: 'list',
    component: AttendanceListComponent,
  },
  {
    path: 'form',
    component: AttendanceFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleListComponent} from "./schedule-list/schedule-list.component";
import {ScheduleFormComponent} from "./schedule-form/schedule-form.component";

const routes: Routes = [
  {
  path: 'list',
  component: ScheduleListComponent,
},
{
  path: 'form',
    component: ScheduleFormComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }

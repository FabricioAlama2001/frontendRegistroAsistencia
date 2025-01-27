import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () => import('./employee/employee.module').then(m=>m.EmployeeModule)
  },
  {
    path: 'schedules',
    loadChildren: () => import('./schedule/schedule.module').then(m=>m.ScheduleModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {
  }

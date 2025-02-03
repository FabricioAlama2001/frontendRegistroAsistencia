import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employee/employee.module').then(m=>m.EmployeeModule)
  },
  {
    path: 'schedules',
    loadChildren: () => import('./schedule/schedule.module').then(m=>m.ScheduleModule)
  },
  {
    path: 'attendances',
    loadChildren: () => import('./attendance/attendance.module').then(m=>m.AttendanceModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {
  }

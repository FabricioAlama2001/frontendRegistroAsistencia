import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'employees',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
    },
    {
        path: 'schedules',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)
    },
];
let ManagerRoutingModule = class ManagerRoutingModule {
};
ManagerRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ManagerRoutingModule);
export { ManagerRoutingModule };
//# sourceMappingURL=manager-routing.module.js.map
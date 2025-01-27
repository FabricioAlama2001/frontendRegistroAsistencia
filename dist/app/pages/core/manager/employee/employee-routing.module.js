import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";
const routes = [
    {
        path: 'list',
        component: EmployeeListComponent,
    },
    {
        path: 'form',
        component: EmployeeFormComponent,
    }
];
let EmployeeRoutingModule = class EmployeeRoutingModule {
};
EmployeeRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], EmployeeRoutingModule);
export { EmployeeRoutingModule };
//# sourceMappingURL=employee-routing.module.js.map
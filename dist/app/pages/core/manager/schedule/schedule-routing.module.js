import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScheduleListComponent } from "./schedule-list/schedule-list.component";
import { ScheduleFormComponent } from "./schedule-form/schedule-form.component";
const routes = [
    {
        path: 'list',
        component: ScheduleListComponent,
    },
    {
        path: 'form',
        component: ScheduleFormComponent,
    }
];
let ScheduleRoutingModule = class ScheduleRoutingModule {
};
ScheduleRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ScheduleRoutingModule);
export { ScheduleRoutingModule };
//# sourceMappingURL=schedule-routing.module.js.map
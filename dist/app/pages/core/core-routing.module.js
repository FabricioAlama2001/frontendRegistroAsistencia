import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'manager',
        loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule),
    }
];
let CoreRoutingModule = class CoreRoutingModule {
};
CoreRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], CoreRoutingModule);
export { CoreRoutingModule };
//# sourceMappingURL=core-routing.module.js.map
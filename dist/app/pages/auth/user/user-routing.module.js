import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ExitGuard } from "../../../guards";
import { ProfileComponent } from "./profile/profile.component";
const routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
    },
    {
        path: ':id',
        component: UserFormComponent,
        canDeactivate: [ExitGuard]
    },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UserRoutingModule);
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map
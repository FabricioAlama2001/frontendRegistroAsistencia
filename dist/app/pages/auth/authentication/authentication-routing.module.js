import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { PasswordResetComponent } from "./password-reset/password-reset.component";
import { RoleSelectComponent } from "./role-select/role-select.component";
const routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'password-reset',
        component: PasswordResetComponent
    },
    {
        path: 'role-select',
        component: RoleSelectComponent
    },
];
let AuthenticationRoutingModule = class AuthenticationRoutingModule {
};
AuthenticationRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AuthenticationRoutingModule);
export { AuthenticationRoutingModule };
//# sourceMappingURL=authentication-routing.module.js.map
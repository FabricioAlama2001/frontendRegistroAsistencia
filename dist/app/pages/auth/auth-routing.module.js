import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'authentication',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    {
        path: 'menus',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AuthRoutingModule);
export { AuthRoutingModule };
//# sourceMappingURL=auth-routing.module.js.map
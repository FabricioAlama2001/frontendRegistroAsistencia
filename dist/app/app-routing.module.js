import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlankComponent, MainComponent } from "./layout";
import { TokenGuard } from "./guards";
const routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [TokenGuard],
        children: [
            {
                path: 'admin',
                title: 'Admin',
                loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
            },
            {
                path: 'core',
                title: 'Core',
                loadChildren: () => import('./pages/core/core.module').then(m => m.CoreModule),
            },
        ]
    },
    {
        path: 'auth',
        title: 'Auth',
        component: BlankComponent,
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'common',
        title: 'Common',
        component: BlankComponent,
        loadChildren: () => import('./pages/common/common.module').then(m => m.CommonModule),
    },
    {
        path: 'login',
        title: 'Login',
        redirectTo: '/auth/authentication/login'
    },
    {
        path: 'password-reset',
        title: 'Password Reset',
        redirectTo: '/auth/authentication/password-reset'
    },
    {
        path: 'profile',
        title: 'Profile',
        redirectTo: '/admin/users/profile'
    },
    {
        path: '**',
        redirectTo: '/common/404'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
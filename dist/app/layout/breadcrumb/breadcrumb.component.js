import { __decorate } from "tslib";
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { BreadcrumbService, CoreService, RoutesService } from "../../services/app/core";
import { AuthHttpService, AuthService } from "../../services/app/auth";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor() {
        this.PrimeIcons = PrimeIcons;
        this.HOST_URL = environment.API_URL;
        this.items = [];
        this.breadcrumbService = inject(BreadcrumbService);
        this.coreService = inject(CoreService);
        this.authHttpService = inject(AuthHttpService);
        this.authService = inject(AuthService);
        this.routesService = inject(RoutesService);
        this.router = inject(Router);
        if (this.authService.auth) {
            this.nickname = `${this.authService.auth.username} - ${this.authService.role.name}`;
        }
        this.subscription = this.breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
        // this.home = {icon: PrimeIcons.HOME, routerLink: `/core/dashboards/${this.authService.role?.code}`};
        this.home = { icon: PrimeIcons.HOME };
    }
    redirectProfile() {
        this.router.navigate([this.routesService.profile]);
    }
    signOut() {
        this.authHttpService.signOut();
    }
    updateSystem() {
        this.coreService.updateSystem();
    }
};
BreadcrumbComponent = __decorate([
    Component({
        selector: 'app-breadcrumb',
        templateUrl: './breadcrumb.component.html',
        styleUrls: ['./breadcrumb.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], BreadcrumbComponent);
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map
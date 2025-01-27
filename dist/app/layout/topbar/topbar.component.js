import { __decorate } from "tslib";
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { BreadcrumbService, CoreService, RoutesService } from "../../services/app/core";
import { AuthHttpService, AuthService } from "../../services/app/auth";
import { environment } from "../../../environments/environment";
let TopbarComponent = class TopbarComponent {
    constructor() {
        this.PrimeIcons = PrimeIcons;
        this.items = [];
        this.breadcrumbService = inject(BreadcrumbService);
        this.coreService = inject(CoreService);
        this.authHttpService = inject(AuthHttpService);
        this.authService = inject(AuthService);
        this.routesService = inject(RoutesService);
        this.environment = environment;
        if (this.authService.auth) {
            this.nickname = `${this.authService.auth.name} ${this.authService.auth.lastname}`;
        }
        this.home = { label: 'Home', icon: PrimeIcons.HOME, routerLink: `/core/dashboards/${this.authService.role?.code}` };
        this.menu = { label: 'Menú', icon: PrimeIcons.LIST, command: () => this.coreService.sidebarVisible = true };
        this.items.push(this.menu);
    }
    signOut() {
        this.authHttpService.signOut();
    }
};
TopbarComponent = __decorate([
    Component({
        selector: 'app-topbar',
        templateUrl: './topbar.component.html',
        styleUrls: ['./topbar.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], TopbarComponent);
export { TopbarComponent };
//# sourceMappingURL=topbar.component.js.map
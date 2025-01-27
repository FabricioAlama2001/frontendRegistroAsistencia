import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { RoutesService } from "../../../services/app/core";
import { AuthService } from "../../../services/app/auth";
let UnauthorizedComponent = class UnauthorizedComponent {
    constructor() {
        this.routesService = inject(RoutesService);
        this.authService = inject(AuthService);
        this.count = 4;
        this.authService.removeLogin();
        setInterval(() => {
            this.count--;
        }, 1000);
        setTimeout(() => {
            this.routesService.login();
        }, this.count * 1000);
    }
};
UnauthorizedComponent = __decorate([
    Component({
        selector: 'app-unauthorized',
        templateUrl: './unauthorized.component.html',
        styleUrls: ['./unauthorized.component.css']
    })
], UnauthorizedComponent);
export { UnauthorizedComponent };
//# sourceMappingURL=unauthorized.component.js.map
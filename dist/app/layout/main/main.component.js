import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { AuthService } from "../../services/app/auth";
let MainComponent = class MainComponent {
    constructor() {
        this.authService = inject(AuthService);
        // this.authService.selectDashboard();
    }
};
MainComponent = __decorate([
    Component({
        selector: 'app-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.scss']
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map
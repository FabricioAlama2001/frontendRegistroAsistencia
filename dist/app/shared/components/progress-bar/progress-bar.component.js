import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ProgressBarComponent = class ProgressBarComponent {
    constructor() {
        this.message = 'Procesando...';
    }
};
__decorate([
    Input()
], ProgressBarComponent.prototype, "message", void 0);
ProgressBarComponent = __decorate([
    Component({
        selector: 'app-progress-bar',
        templateUrl: './progress-bar.component.html',
        styleUrls: ['./progress-bar.component.scss']
    })
], ProgressBarComponent);
export { ProgressBarComponent };
//# sourceMappingURL=progress-bar.component.js.map
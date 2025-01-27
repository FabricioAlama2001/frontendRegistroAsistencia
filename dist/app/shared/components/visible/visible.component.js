import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PrimeIcons } from "primeng/api";
let VisibleComponent = class VisibleComponent {
    constructor() {
        this.isVisible = false;
        this.PrimeIcons = PrimeIcons;
    }
};
__decorate([
    Input()
], VisibleComponent.prototype, "isVisible", void 0);
VisibleComponent = __decorate([
    Component({
        selector: 'app-visible',
        templateUrl: './visible.component.html',
        styleUrls: ['./visible.component.scss']
    })
], VisibleComponent);
export { VisibleComponent };
//# sourceMappingURL=visible.component.js.map
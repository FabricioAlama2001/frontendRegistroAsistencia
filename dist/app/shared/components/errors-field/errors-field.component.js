import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ErrorsFieldComponent = class ErrorsFieldComponent {
    constructor() {
        this.errors = [];
    }
};
__decorate([
    Input()
], ErrorsFieldComponent.prototype, "errors", void 0);
ErrorsFieldComponent = __decorate([
    Component({
        selector: 'app-errors-field',
        templateUrl: './errors-field.component.html',
        styleUrls: ['./errors-field.component.scss']
    })
], ErrorsFieldComponent);
export { ErrorsFieldComponent };
//# sourceMappingURL=errors-field.component.js.map
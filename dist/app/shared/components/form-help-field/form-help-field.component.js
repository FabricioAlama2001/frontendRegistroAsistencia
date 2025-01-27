import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PrimeIcons } from "primeng/api";
let FormHelpFieldComponent = class FormHelpFieldComponent {
    constructor() {
        this.content = '';
        this.PrimeIcons = PrimeIcons;
        this.Array = Array;
    }
};
__decorate([
    Input({ required: true })
], FormHelpFieldComponent.prototype, "content", void 0);
FormHelpFieldComponent = __decorate([
    Component({
        selector: 'app-form-help-field',
        templateUrl: './form-help-field.component.html',
        styleUrl: './form-help-field.component.scss'
    })
], FormHelpFieldComponent);
export { FormHelpFieldComponent };
//# sourceMappingURL=form-help-field.component.js.map
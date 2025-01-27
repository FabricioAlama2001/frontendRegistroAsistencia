import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LabelButtonActionEnum } from "../../enums";
let ButtonActionComponent = class ButtonActionComponent {
    constructor() {
        this.enabled = false;
        this.buttonActions = [];
        this.isHide = new EventEmitter(false);
        this.LabelButtonActionEnum = LabelButtonActionEnum;
    }
};
__decorate([
    Input()
], ButtonActionComponent.prototype, "enabled", void 0);
__decorate([
    Input()
], ButtonActionComponent.prototype, "buttonActions", void 0);
__decorate([
    Output()
], ButtonActionComponent.prototype, "isHide", void 0);
ButtonActionComponent = __decorate([
    Component({
        selector: 'app-button-action',
        templateUrl: './button-action.component.html',
        styleUrls: ['./button-action.component.scss']
    })
], ButtonActionComponent);
export { ButtonActionComponent };
//# sourceMappingURL=button-action.component.js.map
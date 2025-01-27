import { __decorate } from "tslib";
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IconButtonActionEnum, LabelButtonActionEnum, SeverityButtonActionEnum } from "../../enums";
import { CoreService } from "../../../services/app/core";
let FormButtonActionComponent = class FormButtonActionComponent {
    constructor() {
        this.submit = new EventEmitter();
        this.cancel = new EventEmitter();
        this.labelSubmitButton = LabelButtonActionEnum.SAVE;
        this.labelCancelButton = LabelButtonActionEnum.RETURN;
        this.iconSubmitButton = IconButtonActionEnum.SAVE;
        this.iconCancelButton = IconButtonActionEnum.RETURN;
        this.severitySubmitButton = SeverityButtonActionEnum.SAVE;
        this.severityCancelButton = SeverityButtonActionEnum.RETURN;
        this.isVisibleCancelButton = true;
        this.isVisibleSubmitButton = true;
        this.coreService = inject(CoreService);
        this.IconButtonActionEnum = IconButtonActionEnum;
        this.LabelButtonActionEnum = LabelButtonActionEnum;
        this.SeverityButtonActionEnum = SeverityButtonActionEnum;
    }
};
__decorate([
    Output()
], FormButtonActionComponent.prototype, "submit", void 0);
__decorate([
    Output()
], FormButtonActionComponent.prototype, "cancel", void 0);
__decorate([
    Input()
], FormButtonActionComponent.prototype, "labelSubmitButton", void 0);
__decorate([
    Input()
], FormButtonActionComponent.prototype, "labelCancelButton", void 0);
__decorate([
    Input()
], FormButtonActionComponent.prototype, "iconSubmitButton", void 0);
__decorate([
    Input()
], FormButtonActionComponent.prototype, "iconCancelButton", void 0);
__decorate([
    Input()
], FormButtonActionComponent.prototype, "severitySubmitButton", void 0);
__decorate([
    Input()
], FormButtonActionComponent.prototype, "severityCancelButton", void 0);
__decorate([
    Input()
], FormButtonActionComponent.prototype, "isVisibleCancelButton", void 0);
__decorate([
    Input()
], FormButtonActionComponent.prototype, "isVisibleSubmitButton", void 0);
FormButtonActionComponent = __decorate([
    Component({
        selector: 'app-form-button-action',
        templateUrl: './form-button-action.component.html',
        styleUrl: './form-button-action.component.scss'
    })
], FormButtonActionComponent);
export { FormButtonActionComponent };
//# sourceMappingURL=form-button-action.component.js.map
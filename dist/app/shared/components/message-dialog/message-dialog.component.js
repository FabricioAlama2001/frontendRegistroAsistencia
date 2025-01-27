import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { MessageDialogService } from "../../../services/app/core";
import { PrimeIcons } from "primeng/api";
let MessageDialogComponent = class MessageDialogComponent {
    constructor() {
        this.messageDialogService = inject(MessageDialogService);
        this.Array = Array;
        this.PrimeIcons = PrimeIcons;
    }
};
MessageDialogComponent = __decorate([
    Component({
        selector: 'app-message-dialog',
        templateUrl: './message-dialog.component.html',
        styleUrl: './message-dialog.component.scss'
    })
], MessageDialogComponent);
export { MessageDialogComponent };
//# sourceMappingURL=message-dialog.component.js.map
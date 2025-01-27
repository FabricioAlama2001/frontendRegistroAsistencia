import { __decorate } from "tslib";
import { Component, EventEmitter, inject, Output, ViewEncapsulation } from '@angular/core';
import { MessageDialogService } from "../../../services/app/core";
import { MessageService, PrimeIcons } from "primeng/api";
let MessageConfirmDialogComponent = class MessageConfirmDialogComponent {
    constructor() {
        this.messageService = inject(MessageService);
        this.messageDialogService = inject(MessageDialogService);
        this.PrimeIcons = PrimeIcons;
        this.result = new EventEmitter();
    }
    showSuccess() {
        this.messageService.add({
            key: 'messageConfirm',
            severity: 'success',
            summary: this.messageDialogService.toastSummary,
            detail: this.messageDialogService.toastDetail
        });
    }
    showError() {
        this.messageService.add({ key: 'messageConfirm', severity: 'error', summary: 'Error', detail: 'Message Content' });
    }
    accept() {
        this.messageDialogService.modalConfirmVisible = false;
        this.messageDialogService.accept();
        if (this.messageDialogService.toastSummary || this.messageDialogService.toastDetail)
            this.showSuccess();
    }
    reject() {
        this.messageDialogService.modalConfirmVisible = false;
        this.messageDialogService.reject();
        // this.showError();
    }
};
__decorate([
    Output()
], MessageConfirmDialogComponent.prototype, "result", void 0);
MessageConfirmDialogComponent = __decorate([
    Component({
        selector: 'app-message-confirm-dialog',
        templateUrl: './message-confirm-dialog.component.html',
        styleUrl: './message-confirm-dialog.component.scss',
        encapsulation: ViewEncapsulation.None
    })
], MessageConfirmDialogComponent);
export { MessageConfirmDialogComponent };
//# sourceMappingURL=message-confirm-dialog.component.js.map
import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ConfirmationService, MessageService, PrimeIcons } from "primeng/api";
let MessageDialogService = class MessageDialogService {
    accept() {
        this._modalResult.next(true);
    }
    reject() {
        this._modalResult.next(false);
    }
    constructor() {
        this.messageService = inject(MessageService);
        this.confirmationService = inject(ConfirmationService);
        this._modalVisible = false;
        this._modalConfirmVisible = false;
        this._modalTitle = '';
        this._modalAcceptSeverity = null;
        this._modalRejectSeverity = 'danger';
        this._modalMessage = '';
        this._modalIcon = '';
        this._modalIconColor = '';
        this._toastSummary = '';
        this._toastDetail = '';
        this._modalResult = new BehaviorSubject(true);
        this.modalResult$ = this._modalResult.asObservable();
    }
    errorHttp(error) {
        if (Array.isArray(error))
            error.sort();
        this._modalVisible = true;
        this._modalAcceptSeverity = 'danger';
        this._modalIcon = PrimeIcons.TIMES_CIRCLE;
        this._modalIconColor = 'var(--red-500)';
        this._modalTitle = error.message;
        this._modalMessage = error.detail;
    }
    errorCustom(title, message) {
        if (Array.isArray(message))
            message.sort();
        this._modalVisible = true;
        this._modalAcceptSeverity = 'danger';
        this._modalIcon = PrimeIcons.TIMES_CIRCLE;
        this._modalIconColor = 'var(--red-500)';
        this._modalTitle = title;
        this._modalMessage = message;
    }
    successCustom(title, message) {
        if (Array.isArray(message))
            message.sort();
        this._modalVisible = true;
        this._modalAcceptSeverity = 'primary';
        this._modalIcon = PrimeIcons.INFO_CIRCLE;
        this._modalIconColor = 'var(--primary-color)';
        this._modalTitle = title;
        this._modalMessage = message;
    }
    successHttp(serverResponse) {
        if (Array.isArray(serverResponse.message))
            serverResponse.message.sort();
        this._modalVisible = true;
        this._modalAcceptSeverity = 'primary';
        this._modalIcon = PrimeIcons.INFO_CIRCLE;
        this._modalIconColor = 'var(--primary-color)';
        this._modalTitle = serverResponse.message;
        this._modalMessage = serverResponse.detail;
    }
    fieldErrors(message) {
        if (Array.isArray(message))
            message.sort();
        this._modalVisible = true;
        this._modalAcceptSeverity = 'info';
        this._modalTitle = 'Existen errores en los siguientes campos';
        this._modalMessage = message;
    }
    questionSave() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: "none",
            rejectIcon: "none",
            rejectButtonStyleClass: "p-button-text",
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
    questionDelete(title = '¿Está seguro de eliminar?', message = 'No podrá recuperar esta información!') {
        this._modalResult.next(false);
        this._modalConfirmVisible = true;
        this._modalAcceptSeverity = 'primary';
        this._modalRejectSeverity = 'danger';
        this._modalTitle = title;
        this._modalMessage = message;
        return this.modalResult$;
    }
    questionOnExit(title = '¿Está seguro de salir?', message = 'Se perderá la información que no haya guardado!') {
        // this._modalResult.next(false);
        this._modalConfirmVisible = true;
        this._modalAcceptSeverity = 'primary';
        this._modalRejectSeverity = 'danger';
        this._modalTitle = title;
        this._modalMessage = message;
        this._modalIcon = PrimeIcons.QUESTION_CIRCLE;
        this._modalIconColor = '#969696FF';
        this._toastSummary = '';
        this._toastDetail = '';
        return this.modalResult$;
    }
    get modalTitle() {
        return this._modalTitle;
    }
    get modalIcon() {
        return this._modalIcon;
    }
    get modalIconColor() {
        return this._modalIconColor;
    }
    get toastSummary() {
        return this._toastSummary;
    }
    get toastDetail() {
        return this._toastDetail;
    }
    get modalMessage() {
        return this._modalMessage;
    }
    get modalAcceptSeverity() {
        return this._modalAcceptSeverity;
    }
    get modalRejectSeverity() {
        return this._modalRejectSeverity;
    }
    get modalVisible() {
        return this._modalVisible;
    }
    set modalVisible(value) {
        this._modalVisible = value;
    }
    get modalConfirmVisible() {
        return this._modalConfirmVisible;
    }
    set modalConfirmVisible(value) {
        this._modalConfirmVisible = value;
    }
};
MessageDialogService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MessageDialogService);
export { MessageDialogService };
//# sourceMappingURL=message-dialog.service.js.map
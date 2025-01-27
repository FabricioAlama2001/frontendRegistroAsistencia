import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let MessageService = class MessageService {
    constructor() {
    }
    error(error) {
        return {};
    }
    success(serverResponse) {
        return {};
    }
    successCustom(title, text) {
        return {};
    }
    errorCustom(title, text) {
        return {};
    }
    errorsFields(errors = []) {
        let html = '<ul>';
        for (let i = 0; i < errors.length; i++) {
            html += `<li>${errors[i]}</li>`;
        }
        html += '</ul>';
        return null;
    }
    get requiredFields() {
        return `Todos los campos con <b class="p-error">*</b> son obligatorios.`;
    }
    paginatorTotalRegisters(totalItems) {
        return 'En total hay ' + (totalItems) + ' registros.';
    }
    get paginatorNoRecordsFound() {
        return 'No se encontraron registros.';
    }
    get buttonFormSaveOrUpdate() {
        return `Guardar`;
    }
    get buttonFormClose() {
        return `Cerrar`;
    }
    get progressBarProcess() {
        return `Procesando...`;
    }
    get progressBarSaveOrUpdate() {
        return `Guardando...`;
    }
    get progressBarDownload() {
        return `Descargando...`;
    }
    get progressBarUpload() {
        return `Cargando...`;
    }
    get progressBarLogin() {
        return `Ingresando...`;
    }
    get progressBarRequestPasswordReset() {
        return `Enviando correo...`;
    }
    get progressBarDelete() {
        return `Eliminando...`;
    }
    get messageSuccessDelete() {
        return `Se eliminó correctamente`;
    }
    get exceededMaxAttempts() {
        return 'Exceeded the maximum number of attempts allowed';
    }
};
MessageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MessageService);
export { MessageService };
//# sourceMappingURL=message.service.js.map
import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { CoreService, MessageDialogService } from "../../app/core";
let AdministratorEmployeesHttpService = class AdministratorEmployeesHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/administrator-employees`;
        this.httpClient = inject(HttpClient);
        this.coreService = inject(CoreService);
        this.messageDialogService = inject(MessageDialogService);
    }
    // Crear un empleado
    create(payload) {
        const url = `${this.API_URL}`;
        return this.httpClient.post(url, payload).pipe(map((response) => {
            this.messageDialogService.successHttp(response);
            return response;
        }));
    }
    // Actualizar un empleado
    update(id, payload) {
        const url = `${this.API_URL}/${id}`;
        this.coreService.isProcessing = true;
        return this.httpClient.put(url, payload).pipe(map((response) => {
            this.coreService.isProcessing = false;
            this.messageDialogService.successHttp(response);
            return response;
        }));
    }
    // Eliminar un empleado
    delete(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.delete(url).pipe(map((response) => {
            this.messageDialogService.successHttp(response);
            return response;
        }));
    }
    // Obtener todos los empleados
    findEmployeds() {
        const url = `${this.API_URL}`;
        return this.httpClient.get(url).pipe(map((response) => {
            return response;
        }));
    }
    // Obtener un empleado por ID
    findEmployed(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.get(url).pipe(map((response) => {
            return response;
        }));
    }
};
AdministratorEmployeesHttpService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AdministratorEmployeesHttpService);
export { AdministratorEmployeesHttpService };
//# sourceMappingURL=administrator-employees-http.service.js.map
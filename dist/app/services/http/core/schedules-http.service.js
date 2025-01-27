import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { CoreService, MessageDialogService, MessageService } from "../../app/core";
import { EmployeesHttpService } from "./employees-http.service";
let SchedulesHttpService = class SchedulesHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/schedules`;
        this.httpClient = inject(HttpClient);
        this.employeesHttpService = inject(EmployeesHttpService);
        this.coreService = inject(CoreService);
        this.messageService = inject(MessageService);
        this.messageDialogService = inject(MessageDialogService);
    }
    /**
     * Crear un nuevo horario.
     * @param payload - Datos del horario a crear.
     * @returns Observable con el horario creado.
     */
    create(payload) {
        const url = `${this.API_URL}`;
        return this.httpClient.post(url, payload).pipe(map((response) => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    /**
     * Obtener todos los horarios.
     * @returns Observable con la lista de horarios.
     */
    findAll() {
        const url = `${this.API_URL}`;
        return this.httpClient.get(url).pipe(map((response) => response.data));
    }
    findEmployees() {
        return this.employeesHttpService.findAll().pipe(map((employees) => {
            return employees.map((employee) => ({
                name: `${employee.user?.name} ${employee.user?.lastname}`, // Ajusta la ruta según el modelo
                id: employee.id,
            }));
        }));
    }
    /**
     * Obtener días de la semana desde los catálogos.
     * @returns Observable con la lista de días.
     */
    findDays() {
        const url = `${this.API_URL}/days`;
        return this.httpClient.get(url).pipe(map((response) => response.data));
    }
    /**
     * Buscar un horario por ID.
     * @param id - ID del horario.
     * @returns Observable con los datos del horario.
     */
    findOne(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.get(url).pipe(map((response) => response.data));
    }
    /**
     * Actualizar un horario existente.
     * @param scheduleId - ID del horario.
     * @param payload - Datos a actualizar.
     * @returns Observable con el horario actualizado.
     */
    update(scheduleId, payload) {
        const url = `${this.API_URL}/${scheduleId}`;
        this.coreService.isProcessing = true;
        return this.httpClient.put(url, payload).pipe(map((response) => {
            this.coreService.isProcessing = false;
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    /**
     * Deshabilitar un horario.
     * @param id - ID del horario.
     * @returns Observable con una confirmación de deshabilitación.
     */
    disable(id) {
        const url = `${this.API_URL}/${id}/disable`;
        this.coreService.isProcessing = true;
        return this.httpClient.patch(url, null).pipe(map((response) => {
            this.coreService.isProcessing = false;
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    /**
     * Habilitar un horario.
     * @param id - ID del horario.
     * @returns Observable con el horario habilitado.
     */
    enable(id) {
        const url = `${this.API_URL}/${id}/enable`;
        this.coreService.isProcessing = true;
        return this.httpClient.patch(url, null).pipe(map((response) => {
            this.coreService.isProcessing = false;
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    /**
     * Eliminar un horario.
     * @param id - ID del horario.
     * @returns Observable con una confirmación de eliminación.
     */
    remove(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.delete(url).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
};
SchedulesHttpService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SchedulesHttpService);
export { SchedulesHttpService };
//# sourceMappingURL=schedules-http.service.js.map
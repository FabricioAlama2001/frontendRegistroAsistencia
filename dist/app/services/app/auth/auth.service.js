import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { RoleEnum } from "../../../shared/enums";
import { MessageDialogService, RoutesService } from "../core";
let AuthService = class AuthService {
    constructor() {
        this.routesService = inject(RoutesService);
        this.messageDialogService = inject(MessageDialogService);
    }
    get accessToken() {
        let accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
            accessToken = 'Bearer ' + accessToken.replace(/"/g, '');
        }
        return accessToken;
    }
    set accessToken(value) {
        sessionStorage.setItem('accessToken', JSON.stringify(value));
    }
    get tokenDecode() {
        let tokenDecode = sessionStorage.getItem('tokenDecode');
        return tokenDecode;
    }
    set tokenDecode(value) {
        sessionStorage.setItem('tokenDecode', JSON.stringify(value));
    }
    set avatar(value) {
        const auth = this.auth;
        auth.avatar = value;
        sessionStorage.setItem('auth', JSON.stringify(auth));
    }
    get auth() {
        return JSON.parse(String(sessionStorage.getItem('auth')));
    }
    set auth(auth) {
        sessionStorage.setItem('auth', JSON.stringify(auth));
    }
    get permissions() {
        return JSON.parse(String(sessionStorage.getItem('permissions')));
    }
    set permissions(permissions) {
        sessionStorage.setItem('permissions', JSON.stringify(permissions));
    }
    get role() {
        return JSON.parse(String(sessionStorage.getItem('role')));
    }
    set role(role) {
        sessionStorage.setItem('role', JSON.stringify(role));
    }
    get roles() {
        return JSON.parse(String(sessionStorage.getItem('roles')));
    }
    set roles(roles) {
        sessionStorage.setItem('roles', JSON.stringify(roles));
    }
    get keepSession() {
        return JSON.parse(String(sessionStorage.getItem('keepSession')));
    }
    set keepSession(value) {
        sessionStorage.setItem('keepSession', JSON.stringify(value));
    }
    get system() {
        return environment.APP_NAME;
    }
    get systemShortName() {
        return environment.APP_SHORT_NAME;
    }
    removeLogin() {
        localStorage.clear();
        sessionStorage.clear();
    }
    selectDashboard() {
        this.messageDialogService.successCustom(`Bienvenido, ${this.auth.name} ${this.auth.lastname}`, 'Ingreso Correcto');
        switch (this.role.code) {
            case RoleEnum.ADMIN: {
                this.routesService.dashboardAdmin();
                break;
            }
            case RoleEnum.MANAGER: {
                this.routesService.dashboardManager();
                break;
            }
            case RoleEnum.EMPLOYEE: {
                this.routesService.dashboardEmployee();
                break;
            }
            default: {
                this.routesService.login();
            }
        }
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
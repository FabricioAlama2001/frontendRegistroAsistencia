import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { AuthService } from "./";
import { CoreService, MessageService } from "../core";
import { RoutesService } from "../core";
import { CataloguesHttpService, LocationsHttpService } from "../../http/core";
import { RolePipe } from "../../../shared/pipes";
let AuthHttpService = class AuthHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/auth`;
        this.rolePipe = new RolePipe();
        this.httpClient = inject(HttpClient);
        this.authService = inject(AuthService);
        this.coreService = inject(CoreService);
        this.cataloguesHttpService = inject(CataloguesHttpService);
        this.locationsHttpService = inject(LocationsHttpService);
        this.router = inject(Router);
        this.routesService = inject(RoutesService);
        this.messageService = inject(MessageService);
    }
    signup(userData) {
        const url = `${this.API_URL}/patients/users`;
        // //this.appService.presentLoading();
        return this.httpClient.post(url, userData)
            .pipe(map(response => {
            this.messageService.success(response);
            return response.data;
        }), tap(() => {
            this.router.navigateByUrl('/login');
        }));
    }
    changePassword(id, credentials) {
        const url = `${this.API_URL}/${id}/change-password`;
        this.coreService.isProcessing = true;
        return this.httpClient.put(url, credentials)
            .pipe(map(response => {
            this.coreService.isProcessing = false;
            this.messageService.success(response);
            return response.data;
        }));
    }
    login(credentials) {
        const url = `${this.API_URL}/login`;
        this.cataloguesHttpService.loadCache();
        return this.httpClient.post(url, credentials)
            .pipe(map(response => {
            this.authService.accessToken = response.data.accessToken;
            this.authService.auth = response.data.auth;
            this.authService.roles = response.data.auth.roles;
            return response;
        }));
    }
    signOut() {
        this.authService.removeLogin();
        this.messageService.successCustom('Cerrar Sesión', 'Se cerró correctamente');
        this.router.navigate(['/login']);
        /*
        const url = `${this.API_URL}/logout`;
    
        return this.httpClient.get<ServerResponse>(url)
          .pipe(
            map(response => {
              this.authService.removeLogin();
              return response.data;
            }),
            tap(() => {
              this.routesService.login();
            })
          );
          */
    }
    resetPassword(credentials) {
        const url = `${this.API_URL}/reset-passwords`;
        return this.httpClient.patch(url, credentials)
            .pipe(map(response => {
            this.messageService.success(response);
            return response;
        }));
    }
    verifyUser(username) {
        const url = `${this.API_URL}/verify-user/${username}`;
        return this.httpClient.get(url)
            .pipe(map(response => response), catchError(error => {
            return throwError(error);
        }));
    }
    verifyEmail(email) {
        const url = `${this.API_URL}/verify-email/${email}`;
        return this.httpClient.get(url)
            .pipe(map(response => response), catchError(error => {
            return throwError(error);
        }));
    }
    verifyPhone(phone) {
        const url = `${this.API_URL}/verify-phone/${phone}`;
        return this.httpClient.get(url)
            .pipe(map(response => response), catchError(error => {
            return throwError(error);
        }));
    }
    requestTransactionalCode(username) {
        const url = `${this.API_URL}/transactional-codes/${username}/request`;
        return this.httpClient.get(url)
            .pipe(map(response => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    verifyTransactionalCode(token, username) {
        const url = `${this.API_URL}/transactional-codes/${token}/verify`;
        return this.httpClient.patch(url, { username })
            .pipe(map(response => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    getProfile() {
        const url = `${this.API_URL}/profile`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    getUserInformation() {
        const url = `${this.API_URL}/user-information`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    updateProfile(payload) {
        const url = `${this.API_URL}/profile`;
        this.coreService.isProcessing = true;
        return this.httpClient.put(url, payload).pipe(map(response => {
            this.coreService.isProcessing = false;
            this.messageService.success(response);
            return response.data;
        }));
    }
    updateUserInformation(payload) {
        const url = `${this.API_URL}/user-information`;
        this.coreService.isProcessing = true;
        return this.httpClient.put(url, payload).pipe(map(response => {
            this.coreService.isProcessing = false;
            this.messageService.success(response);
            return response.data;
        }));
    }
    uploadAvatar(id, payload) {
        const url = `${this.API_URL}/${id}/avatar`;
        this.coreService.isProcessing = true;
        return this.httpClient.post(url, payload).pipe(map((response) => {
            this.coreService.isProcessing = false;
            this.messageService.success(response);
            return response.data;
        }));
    }
};
AuthHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthHttpService);
export { AuthHttpService };
//# sourceMappingURL=auth-http.service.js.map
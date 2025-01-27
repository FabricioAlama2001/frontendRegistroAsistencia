import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { map } from 'rxjs/operators';
let UsersHttpService = class UsersHttpService {
    constructor(httpClient, messageService) {
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.API_URL = `${environment.API_URL}/users`;
    }
    create(payload) {
        const url = `${this.API_URL}`;
        return this.httpClient.post(url, payload).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    findUsers(page = 0, search = '') {
        const url = this.API_URL;
        const headers = new HttpHeaders().append('pagination', 'true');
        const params = new HttpParams()
            .append('page', page)
            .append('search', search)
            .append('limit', '2');
        return this.httpClient.get(url, { headers, params }).pipe(map((response) => {
            return response;
        }));
    }
    findOne(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    findAllUsersLDAP() {
        const url = `${this.API_URL}/ldap`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    update(id, payload) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.put(url, payload).pipe(map(response => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    reactivate(id) {
        const url = `${this.API_URL}/${id}/reactivate`;
        return this.httpClient.put(url, null).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    remove(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.delete(url).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    removeAll(users) {
        const url = `${this.API_URL}/remove-all`;
        return this.httpClient.patch(url, users).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    suspend(id) {
        const url = `${this.API_URL}/${id}/suspend`;
        return this.httpClient.put(url, null).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    findCatalogues() {
        const url = `${this.API_URL}/catalogues`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
};
UsersHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UsersHttpService);
export { UsersHttpService };
//# sourceMappingURL=users-http.service.js.map
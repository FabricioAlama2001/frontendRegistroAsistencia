import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { map } from 'rxjs/operators';
let MenusHttpService = class MenusHttpService {
    constructor(coreService, httpClient, messageService) {
        this.coreService = coreService;
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.API_URL = `${environment.API_URL}/menus`;
    }
    create(payload) {
        const url = `${this.API_URL}`;
        return this.httpClient.post(url, payload).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    catalogue() {
        const url = `${this.API_URL}/catalogue`;
        return this.httpClient.get(url).pipe(map((response) => {
            return response.data;
        }));
    }
    getMenusForSidebar() {
        const url = `${this.API_URL}/sidebar`;
        return this.httpClient.get(url).pipe(map((response) => {
            return response.data;
        }));
    }
    getMenusByRole(roleId) {
        const url = `${this.API_URL}/roles/${roleId}`;
        return this.httpClient.get(url).pipe(map((response) => {
            return response.data;
        }));
    }
    findAll(page = 0, search = '') {
        const url = this.API_URL;
        const headers = new HttpHeaders().append('pagination', 'true');
        const params = new HttpParams()
            .append('page', page)
            .append('search', search);
        return this.httpClient.get(url, { headers, params }).pipe(map((response) => {
            // if (response.pagination) {
            //   this.pagination.next(response.pagination);
            // }
            return response.data;
        }));
    }
    findOne(id) {
        const url = `${this.API_URL}/${id}`;
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
    remove(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.delete(url).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    removeAll(menus) {
        const url = `${this.API_URL}/remove-all`;
        return this.httpClient.patch(url, menus).pipe(map((response) => {
            this.messageService.success(response);
            return response.data;
        }));
    }
};
MenusHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MenusHttpService);
export { MenusHttpService };
//# sourceMappingURL=menu-http.service.js.map
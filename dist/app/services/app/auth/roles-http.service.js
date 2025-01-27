import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { map } from 'rxjs/operators';
let RolesHttpService = class RolesHttpService {
    constructor(coreService, httpClient, messageService) {
        this.coreService = coreService;
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.API_URL = `${environment.API_URL}/roles`;
    }
    create(payload) {
        const url = `${this.API_URL}`;
        return this.httpClient.post(url, payload).pipe(map((response) => {
            this.messageService.success(response);
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
    removeAll(roles) {
        const url = `${this.API_URL}/remove-all`;
        return this.httpClient.patch(url, roles).pipe(map((response) => {
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
RolesHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RolesHttpService);
export { RolesHttpService };
//# sourceMappingURL=roles-http.service.js.map
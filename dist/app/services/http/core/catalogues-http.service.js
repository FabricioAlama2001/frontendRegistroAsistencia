import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { MessageService } from "../../app/core";
let CataloguesHttpService = class CataloguesHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/catalogues`;
        this.httpClient = inject(HttpClient);
        this.messageService = inject(MessageService);
    }
    create(payload) {
        const url = `${this.API_URL}`;
        return this.httpClient.post(url, payload).pipe(map(response => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    findAll() {
        const url = this.API_URL;
        return this.httpClient.get(url).pipe(map(response => {
            sessionStorage.setItem('catalogues', JSON.stringify(response.data));
            return response.data;
        }));
    }
    findOne(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.get(url).pipe(map(response => response.data));
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
        return this.httpClient.delete(url).pipe(map(response => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    removeAll(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.delete(url).pipe(map(response => {
            this.messageService.success(response);
            return response.data;
        }));
    }
    loadCache() {
        const url = `${this.API_URL}`;
        this.httpClient.get(url).subscribe(response => {
            sessionStorage.setItem('catalogues', JSON.stringify(response.data));
        });
    }
    findByType(type) {
        const catalogues = JSON.parse(String(sessionStorage.getItem('catalogues')));
        if (catalogues) {
            return catalogues.filter(catalogue => catalogue.type === type);
        }
        return [];
    }
    findByParent(parentId) {
        const catalogues = JSON.parse(String(sessionStorage.getItem('catalogues')));
        if (catalogues) {
            return catalogues.filter(catalogue => catalogue.parent?.id === parentId);
        }
        return [];
    }
};
CataloguesHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CataloguesHttpService);
export { CataloguesHttpService };
//# sourceMappingURL=catalogues-http.service.js.map
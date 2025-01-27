import { __decorate } from "tslib";
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { map } from 'rxjs/operators';
import { MessageService } from "../../app/core";
let LocationsHttpService = class LocationsHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/locations`;
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
    findAll(page = 1, search = '') {
        const url = this.API_URL;
        const headers = new HttpHeaders().append('pagination', 'true');
        const params = new HttpParams().append('page', page).append('search', search);
        return this.httpClient.get(url, { headers, params }).pipe(map(response => {
            // if (response.pagination) {
            //   this.pagination.next(response.pagination);
            // }
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
    findCache() {
        const url = `${this.API_URL}/cache/get`;
        return this.httpClient.get(url).pipe(map(response => {
            sessionStorage.setItem('locations', JSON.stringify(response.data));
            return true;
        }));
    }
    findCountries() {
        const locations = JSON.parse(String(sessionStorage.getItem('locations')));
        return locations.filter(location => location.level === 1);
    }
    findProvincesByCountry(countryId) {
        const locations = JSON.parse(String(sessionStorage.getItem('locations')));
        return locations.filter(location => location.level === 2 && location.parentId === countryId);
    }
    findCantonsByProvince(provinceId) {
        const locations = JSON.parse(String(sessionStorage.getItem('locations')));
        return locations.filter(location => location.level === 3 && location.parentId === provinceId);
    }
    findParishesByCanton(cantonId) {
        const locations = JSON.parse(String(sessionStorage.getItem('locations')));
        return locations.filter(location => location.level === 4 && location.parentId === cantonId);
    }
};
LocationsHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LocationsHttpService);
export { LocationsHttpService };
//# sourceMappingURL=locations-http.service.js.map
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CoreService = class CoreService {
    constructor() {
        this._isLoading = false;
        this._isProcessing = false;
        this._higherSort = 1;
        this._sidebarVisible = false;
    }
    updateSystem() {
        this.version = this.newVersion;
        // this.cataloguesHttpService.findCache().subscribe(() => {
        //   // location.reload();
        // });
        //
        // this.locationsHttpService.findCache().subscribe(() => {
        //   // location.reload();
        // });
    }
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        setTimeout(() => {
            this._isLoading = value;
        }, 200);
    }
    get isProcessing() {
        return this._isProcessing;
    }
    set isProcessing(value) {
        if (this._isProcessing != value) {
            setTimeout(() => {
                this._isProcessing = value;
            }, 200);
        }
    }
    get paginator() {
        return { page: 0, limit: 10, totalItems: 0, firstItem: 1, lastPage: 1, lastItem: 1 };
    }
    get serviceUnavailable() {
        return JSON.parse(String(sessionStorage.getItem('serviceUnavailable')));
    }
    set serviceUnavailable(value) {
        sessionStorage.setItem('serviceUnavailable', JSON.stringify(value));
    }
    get version() {
        return JSON.parse(String(localStorage.getItem('version')));
        // return JSON.parse(String(sessionStorage.getItem('version')));
    }
    set version(value) {
        localStorage.setItem('version', JSON.stringify(value));
        // sessionStorage.setItem('version', JSON.stringify(value));
    }
    get newVersion() {
        return JSON.parse(String(localStorage.getItem('newVersion')));
        // return JSON.parse(String(sessionStorage.getItem('newVersion')));
    }
    set newVersion(value) {
        localStorage.setItem('newVersion', JSON.stringify(value));
        // sessionStorage.setItem('newVersion', JSON.stringify(value));
    }
    get higherSort() {
        return this._higherSort;
    }
    set higherSort(value) {
        this._higherSort = value;
    }
    get sidebarVisible() {
        return this._sidebarVisible;
    }
    set sidebarVisible(value) {
        this._sidebarVisible = value;
    }
};
CoreService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CoreService);
export { CoreService };
//# sourceMappingURL=core.service.js.map
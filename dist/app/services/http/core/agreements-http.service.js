import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { CoreService, MessageDialogService, MessageService } from "../../app/core";
let AgreementsHttpService = class AgreementsHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/agreements`;
        this.httpClient = inject(HttpClient);
        this.coreService = inject(CoreService);
        this.messageService = inject(MessageService);
        this.messageDialogService = inject(MessageDialogService);
    }
    register(payload) {
        const url = `${this.API_URL}`;
        return this.httpClient.post(url, payload).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    update(id, payload) {
        const url = `${this.API_URL}/${id}`;
        this.coreService.isProcessing = true;
        return this.httpClient.put(url, payload).pipe(map(response => {
            this.coreService.isProcessing = false;
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    finish(id) {
        const url = `${this.API_URL}/${id}/finish`;
        return this.httpClient.patch(url, null).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    uploadEnablingDocuments(id, formData) {
        const url = `${this.API_URL}/${id}/enabling-documents`;
        return this.httpClient.post(url, formData).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    uploadAddendum(id, formData, isEdit = false) {
        const url = `${this.API_URL}/${id}/addendums`;
        const params = new HttpParams().append('edit', isEdit);
        return this.httpClient.post(url, formData, { params }).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    uploadEnablingDocument(id, formData, isEdit = false) {
        const url = `${this.API_URL}/${id}/enabling-documents`;
        const params = new HttpParams().append('edit', isEdit);
        return this.httpClient.post(url, formData, { params }).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    findNationalAgreementsByOrigin() {
        const url = `${this.API_URL}/national-agreements`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    findInternationalAgreementsByOrigin() {
        const url = `${this.API_URL}/international-agreements`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    findOne(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.get(url).pipe(map(response => {
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
    verifyInternalNumber(internalNumber) {
        const url = `${this.API_URL}/${internalNumber}/verify-internalnumber`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    verifyInternalNumberUpdate(internalNumber, agreementId) {
        const url = `${this.API_URL}/${internalNumber}/update-verify-internalnumber`;
        const params = new HttpParams().append('agreementId', agreementId);
        return this.httpClient.get(url, { params }).pipe(map(response => {
            return response.data;
        }));
    }
};
AgreementsHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AgreementsHttpService);
export { AgreementsHttpService };
//# sourceMappingURL=agreements-http.service.js.map
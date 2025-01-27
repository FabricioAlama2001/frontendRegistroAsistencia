import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { CoreService, MessageDialogService, MessageService } from "../../app/core";
import { format } from "date-fns";
let TrackingLogsHttpService = class TrackingLogsHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/tracking-logs`;
        this.httpClient = inject(HttpClient);
        this.coreService = inject(CoreService);
        this.messageService = inject(MessageService);
        this.messageDialogService = inject(MessageDialogService);
    }
    create(agreementId) {
        const url = `${this.API_URL}/${agreementId}/periods`;
        return this.httpClient.post(url, null).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    createPeriod(agreementId) {
        const url = `${this.API_URL}/${agreementId}/periods`;
        return this.httpClient.post(url, null).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    findPeriodsByAgreement(agreementId) {
        const url = `${this.API_URL}/${agreementId}/periods`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    createTrackingLog(id, formData) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.post(url, formData).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    createAdditionalDocument(id, formData) {
        const url = `${this.API_URL}/${id}/additional-documents`;
        return this.httpClient.post(url, formData).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    changeState(id, state, observation = '') {
        const url = `${this.API_URL}/${id}/state`;
        const params = new HttpParams()
            .append('state', state)
            .append('observation', observation);
        return this.httpClient.patch(url, null, { params }).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    findAdditionalDocumentsByAgreement(agreementId) {
        const url = `${this.API_URL}/${agreementId}/additional-documents`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    deleteAdditionalDocument(id) {
        const url = `${this.API_URL}/${id}/additional-documents`;
        return this.httpClient.delete(url).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    downloadLog(periodId) {
        const url = `${this.API_URL}/${periodId}/download`;
        this.coreService.isProcessing = true;
        this.httpClient.get(url, { responseType: 'blob' })
            .subscribe(response => {
            const filePath = URL.createObjectURL(new Blob([response]));
            const downloadLink = document.createElement('a');
            downloadLink.href = filePath;
            const fileName = `bitacora_ejecucion_seguimiento_${format(new Date, 'yyyy_MM_dd hh_mm_ss')}.pdf`;
            downloadLink.setAttribute('download', fileName);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            this.coreService.isProcessing = false;
        });
    }
};
TrackingLogsHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TrackingLogsHttpService);
export { TrackingLogsHttpService };
//# sourceMappingURL=tracking-logs-http.service.js.map
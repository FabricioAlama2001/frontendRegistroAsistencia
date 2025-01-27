import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { map } from 'rxjs/operators';
import { MessageService as MessageServicePn } from 'primeng/api';
import { CoreService, MessageDialogService } from "../../app/core";
import { CoreMessageEnum } from "../../../shared/enums";
let FilesHttpService = class FilesHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/files`;
        this.messageServicePn = inject(MessageServicePn);
        this.coreService = inject(CoreService);
        this.httpClient = inject(HttpClient);
        this.messageDialogService = inject(MessageDialogService);
    }
    findByModel(modelId) {
        const url = `${this.API_URL}/models/${modelId}`;
        return this.httpClient.get(url).pipe(map((response) => {
            return response;
        }));
    }
    findOne(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.get(url).pipe(map((response) => {
            return response.data;
        }));
    }
    uploadFile(modelId, typeId, payload) {
        const url = `${this.API_URL}/${modelId}/upload?typeId=${typeId}`;
        this.coreService.isProcessing = true;
        return this.httpClient.post(url, payload).pipe(map((response) => {
            this.coreService.isProcessing = false;
            this.messageServicePn.clear();
            this.messageServicePn.add({
                key: CoreMessageEnum.APP_TOAST,
                severity: 'info',
                summary: response.title,
                detail: response.message
            });
            return response.data;
        }));
    }
    uploadImage(modelId, payload) {
        const url = `${this.API_URL}/${modelId}/upload-image`;
        this.coreService.isProcessing = true;
        return this.httpClient.post(url, payload).pipe(map((response) => {
            this.coreService.isProcessing = false;
            this.messageServicePn.clear();
            this.messageServicePn.add({
                key: CoreMessageEnum.APP_TOAST,
                severity: 'info',
                summary: response.title,
                detail: response.message
            });
            return response.data;
        }));
    }
    uploadFiles(modelId, formData) {
        const url = `${this.API_URL}/models/${modelId}`;
        return this.httpClient.post(url, formData).pipe(map((response) => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    remove(id, isEdit = false, agreementId = '') {
        const url = `${this.API_URL}/${id}`;
        this.coreService.isProcessing = true;
        const params = new HttpParams()
            .append('agreementId', agreementId)
            .append('edit', isEdit);
        return this.httpClient.delete(url, { params }).pipe(map((response) => {
            this.coreService.isProcessing = false;
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
    downloadFile(file) {
        const url = `${this.API_URL}/${file.id}/download`;
        this.coreService.isProcessing = true;
        this.httpClient.get(url, { responseType: 'blob' })
            .subscribe(response => {
            const filePath = URL.createObjectURL(new Blob([response]));
            const downloadLink = document.createElement('a');
            downloadLink.href = filePath;
            downloadLink.setAttribute('download', file.name);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            this.coreService.isProcessing = false;
        });
    }
};
FilesHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FilesHttpService);
export { FilesHttpService };
//# sourceMappingURL=files-http.service.js.map
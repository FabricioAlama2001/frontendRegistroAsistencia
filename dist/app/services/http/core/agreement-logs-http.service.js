import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { CoreService } from "../../app/core";
import { format } from "date-fns";
let AgreementLogsHttpService = class AgreementLogsHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/agreement-logs`;
        this.coreService = inject(CoreService);
        this.httpClient = inject(HttpClient);
    }
    findAgreementLogsByAgreement(agreementId) {
        const url = `${this.API_URL}/agreements/${agreementId}`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
    downloadLogsByAgreement(agreementId) {
        const url = `${this.API_URL}/${agreementId}/download`;
        this.coreService.isProcessing = true;
        this.httpClient.get(url, { responseType: 'blob' })
            .subscribe(response => {
            const filePath = URL.createObjectURL(new Blob([response]));
            const downloadLink = document.createElement('a');
            downloadLink.href = filePath;
            const fileName = `bitacora_${format(new Date, 'yyyy_MM_dd hh_mm_ss')}.pdf`;
            downloadLink.setAttribute('download', fileName);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            this.coreService.isProcessing = false;
        });
    }
};
AgreementLogsHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AgreementLogsHttpService);
export { AgreementLogsHttpService };
//# sourceMappingURL=agreement-logs-http.service.js.map
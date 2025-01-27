import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { MessageDialogService } from "../../app/core";
let AddendumsHttpService = class AddendumsHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/addendums`;
        this.httpClient = inject(HttpClient);
        this.messageDialogService = inject(MessageDialogService);
    }
    remove(id, isEdit = false, agreementId = '') {
        const url = `${this.API_URL}/${id}`;
        const params = new HttpParams()
            .append('agreementId', agreementId)
            .append('edit', isEdit);
        return this.httpClient.delete(url, { params }).pipe(map(response => {
            this.messageDialogService.successHttp(response);
            return response.data;
        }));
    }
};
AddendumsHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AddendumsHttpService);
export { AddendumsHttpService };
//# sourceMappingURL=addendums-http.service.js.map
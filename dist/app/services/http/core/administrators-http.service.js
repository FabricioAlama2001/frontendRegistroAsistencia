import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";
import { MessageDialogService, MessageService } from "../../app/core";
let AdministratorsHttpService = class AdministratorsHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/administrators`;
        this.httpClient = inject(HttpClient);
        this.messageService = inject(MessageService);
        this.messageDialogService = inject(MessageDialogService);
    }
    findAgreementsByAdministrator(id) {
        const url = `${this.API_URL}/${id}/agreements`;
        return this.httpClient.get(url).pipe(map(response => {
            return response.data;
        }));
    }
};
AdministratorsHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdministratorsHttpService);
export { AdministratorsHttpService };
//# sourceMappingURL=administrators-http.service.js.map
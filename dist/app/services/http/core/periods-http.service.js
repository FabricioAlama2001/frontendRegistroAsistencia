import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { MessageDialogService, MessageService } from "../../app/core";
let PeriodsHttpService = class PeriodsHttpService {
    constructor() {
        this.API_URL = `${environment.API_URL}/periods`;
        this.httpClient = inject(HttpClient);
        this.messageService = inject(MessageService);
        this.messageDialogService = inject(MessageDialogService);
    }
};
PeriodsHttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PeriodsHttpService);
export { PeriodsHttpService };
//# sourceMappingURL=periods-http.service.js.map
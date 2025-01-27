import { __decorate } from "tslib";
import { Injectable, signal } from '@angular/core';
import { createAgreementModel } from "../../../models/core";
let AgreementsService = class AgreementsService {
    constructor() {
        this._agreement$ = signal(createAgreementModel());
    }
    get agreement() {
        return this._agreement$();
        // return JSON.parse(String(sessionStorage.getItem('agreement')));
    }
    get agreementStorage() {
        return JSON.parse(String(sessionStorage.getItem('agreement')));
    }
    set agreement(value) {
        this._agreement$.update(() => value);
        sessionStorage.setItem('agreement', JSON.stringify(value));
    }
    clearAgreement() {
        sessionStorage.removeItem('agreement');
    }
};
AgreementsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AgreementsService);
export { AgreementsService };
//# sourceMappingURL=agreements.service.js.map
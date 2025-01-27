import { map } from "rxjs/operators";
import { of } from "rxjs";
export const verifyAgreementInternalNumber = (agreementsHttpService) => {
    return (control) => {
        return agreementsHttpService.verifyInternalNumber(control.value).pipe(map((response) => {
            return response ? { agreementExists: true } : null;
        }));
    };
};
export const verifyAgreementInternalNumberUpdate = (agreementsHttpService, agreementId) => {
    return (control) => {
        if (agreementId) {
            return agreementsHttpService.verifyInternalNumberUpdate(control.value, agreementId).pipe(map((response) => {
                return response ? { agreementExists: true } : null;
            }));
        }
        return of(null);
    };
};
//# sourceMappingURL=asycn-validators.js.map
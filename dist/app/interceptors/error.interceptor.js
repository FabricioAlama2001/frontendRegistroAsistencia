import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CoreService, MessageDialogService } from "../services/app/core";
let ErrorInterceptor = class ErrorInterceptor {
    constructor() {
        this.coreService = inject(CoreService);
        this.messageDialogService = inject(MessageDialogService);
    }
    intercept(request, next) {
        return next.handle(request).pipe(
        // delay(200),//review quitar solo es para que se pueda ver el efecto
        catchError(error => {
            this.coreService.isLoading = false;
            this.coreService.isProcessing = false;
            this.messageDialogService.errorHttp(error.error);
            return throwError(error);
        }));
    }
};
ErrorInterceptor = __decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptor.js.map
import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from "../services/app/auth";
let TokenInterceptor = class TokenInterceptor {
    constructor() {
        this.authService = inject(AuthService);
    }
    intercept(request, next) {
        let headers = request.headers ? request.headers : new HttpHeaders();
        if (this.authService.accessToken) {
            headers = headers.append('Authorization', this.authService.accessToken.replace(/"/g, ''));
        }
        return next.handle(request.clone({ headers }));
    }
};
TokenInterceptor = __decorate([
    Injectable()
], TokenInterceptor);
export { TokenInterceptor };
//# sourceMappingURL=token.interceptor.js.map
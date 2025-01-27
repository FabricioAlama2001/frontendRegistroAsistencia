import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let AuthenticationInterceptor = class AuthenticationInterceptor {
    constructor(authService, router, coreService) {
        this.authService = authService;
        this.router = router;
        this.coreService = coreService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(catchError(error => {
            // Cuando el usuario no está autenticado
            if (error.status === 401) {
                this.authService.removeLogin();
                this.router.navigate(['/login']);
            }
            // Cuando el usuario no tiene permisos para acceder al recurso solicitado y se encuentra logueado
            if (error.status === 403 && this.authService.accessToken) {
                this.authService.removeLogin();
                this.router.navigate(['/login']);
            }
            // Cuando el usuario no tiene permisos para acceder al recurso solicitado y no está logueado
            if (error.status === 403 && !this.authService.accessToken) {
                this.authService.removeLogin();
                this.router.navigate(['/login']);
            }
            // Cuando el usuario está suspendido
            if (error.status === 429) {
                this.authService.removeLogin();
                this.router.navigate(['/login']);
            }
            // Cuando la aplicación o una ruta está en mantenimiento
            if (error.status === 503) {
                this.authService.removeLogin();
                this.coreService.serviceUnavailable = error.error.data;
                this.router.navigate(['/common/503']);
            }
            return throwError(error);
        }));
    }
};
AuthenticationInterceptor = __decorate([
    Injectable()
], AuthenticationInterceptor);
export { AuthenticationInterceptor };
//# sourceMappingURL=authentication.interceptor.js.map
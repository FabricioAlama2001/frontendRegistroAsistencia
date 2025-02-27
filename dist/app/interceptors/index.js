import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './authentication.interceptor';
import { TokenInterceptor } from './token.interceptor';
import { CoreInterceptor } from './core.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { VersionInterceptor } from "./version.interceptor";
/** Http interceptor providers in outside-in order */
export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CoreInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: VersionInterceptor, multi: true },
];
//# sourceMappingURL=index.js.map
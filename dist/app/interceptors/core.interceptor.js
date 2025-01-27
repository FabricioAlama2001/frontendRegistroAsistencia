import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from "rxjs/operators";
let CoreInterceptor = class CoreInterceptor {
    constructor(coreService) {
        this.coreService = coreService;
    }
    intercept(request, next) {
        let flag = false;
        let headers = request.headers ? request.headers : new HttpHeaders();
        let params = request.params ? request.params : new HttpParams();
        if (headers.get('pagination')) {
            if (!params.get('page')) {
                params = params.append('page', this.coreService.paginator.page);
            }
            if (!params.get('limit')) {
                params = params.append('limit', this.coreService.paginator.limit);
            }
        }
        // flag = request.headers.getAll('Content-Type')?.some(header => header === 'multipart/form-data');
        // headers = headers.append('Accept', 'application/json')
        // if (!flag) {
        //   headers = headers.append('Content-Type', 'application/json');
        // } else {
        //   headers.set('Content-Type','s');
        // }
        this.coreService.isLoading = true;
        return next.handle(request.clone({ headers, params })).pipe(tap(value => {
            this.coreService.isLoading = false;
        }));
    }
};
CoreInterceptor = __decorate([
    Injectable()
], CoreInterceptor);
export { CoreInterceptor };
//# sourceMappingURL=core.interceptor.js.map
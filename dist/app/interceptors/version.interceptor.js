import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { tap } from "rxjs/operators";
let VersionInterceptor = class VersionInterceptor {
    constructor(coreService, messageService) {
        this.coreService = coreService;
        this.messageService = messageService;
    }
    intercept(request, next) {
        return next.handle(request.clone()).pipe(tap((httpEvent) => {
            if (httpEvent.type === 0) {
                return;
            }
            if (httpEvent instanceof HttpResponse) {
                const version = httpEvent.body.version;
                if (version) {
                    this.coreService.newVersion = version;
                    if (!this.coreService.version) {
                        this.coreService.updateSystem();
                    }
                    else if (version != this.coreService.version) {
                        if (version != this.coreService.version) {
                            // this.messageService.questionVersion(version)
                            //   .then(result => {
                            //     if (result.isConfirmed) {
                            //       this.coreService.updateSystem();
                            //     }
                            //   });
                        }
                    }
                }
            }
        }));
    }
};
VersionInterceptor = __decorate([
    Injectable()
], VersionInterceptor);
export { VersionInterceptor };
//# sourceMappingURL=version.interceptor.js.map
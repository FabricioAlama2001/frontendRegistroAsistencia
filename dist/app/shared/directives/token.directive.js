import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
let TokenDirective = class TokenDirective {
    constructor(templateRef, viewContainerRef, authService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.authService = authService;
    }
    ngOnInit() {
    }
    set appToken(val) {
        this.viewContainerRef.clear();
        switch (val) {
            case 'authenticated': {
                if (this.authService.accessToken) {
                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                }
                break;
            }
            case 'unauthenticated': {
                if (!this.authService.accessToken) {
                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                }
                break;
            }
        }
    }
};
__decorate([
    Input()
], TokenDirective.prototype, "appToken", null);
TokenDirective = __decorate([
    Directive({
        selector: '[appToken]'
    })
], TokenDirective);
export { TokenDirective };
//# sourceMappingURL=token.directive.js.map
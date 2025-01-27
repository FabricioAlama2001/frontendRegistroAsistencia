import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let RequiredSeverityPipe = class RequiredSeverityPipe {
    transform(value) {
        return value ? 'danger' : 'info';
    }
};
RequiredSeverityPipe = __decorate([
    Pipe({
        name: 'requiredSeverity'
    })
], RequiredSeverityPipe);
export { RequiredSeverityPipe };
//# sourceMappingURL=required-severity.pipe.js.map
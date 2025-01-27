import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let EnabledSeverityPipe = class EnabledSeverityPipe {
    transform(value) {
        return value ? '' : 'danger';
    }
};
EnabledSeverityPipe = __decorate([
    Pipe({
        name: 'enabledSeverity'
    })
], EnabledSeverityPipe);
export { EnabledSeverityPipe };
//# sourceMappingURL=enabled-severity.pipe.js.map
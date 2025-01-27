import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let EnabledPipe = class EnabledPipe {
    transform(value) {
        return value ? 'HABILITADO' : 'DESHABILITADO';
    }
};
EnabledPipe = __decorate([
    Pipe({
        name: 'enabled'
    })
], EnabledPipe);
export { EnabledPipe };
//# sourceMappingURL=enabled.pipe.js.map
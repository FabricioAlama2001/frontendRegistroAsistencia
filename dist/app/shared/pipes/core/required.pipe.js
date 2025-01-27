import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let RequiredPipe = class RequiredPipe {
    transform(value) {
        return value ? 'Obligatorio' : 'Opcional';
    }
};
RequiredPipe = __decorate([
    Pipe({
        name: 'required'
    })
], RequiredPipe);
export { RequiredPipe };
//# sourceMappingURL=required.pipe.js.map
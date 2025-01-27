import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SelecetedPipe = class SelecetedPipe {
    transform(value) {
        return value ? 'Seleccionado' : '';
    }
};
SelecetedPipe = __decorate([
    Pipe({
        name: 'selected'
    })
], SelecetedPipe);
export { SelecetedPipe };
//# sourceMappingURL=seleceted.pipe.js.map
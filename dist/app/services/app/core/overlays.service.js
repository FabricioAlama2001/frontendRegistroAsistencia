import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PrimeIcons } from "primeng/api";
let OverlaysService = class OverlaysService {
    constructor() {
    }
    get deleteConfirmPopup() {
        return {
            message: '¿Está seguro de eliminar?',
            icon: PrimeIcons.EXCLAMATION_TRIANGLE,
            acceptLabel: 'Si, eliminar',
            rejectLabel: 'Cancelar'
        };
    }
};
OverlaysService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OverlaysService);
export { OverlaysService };
//# sourceMappingURL=overlays.service.js.map
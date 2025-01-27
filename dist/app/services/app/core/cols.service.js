import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ColsService = class ColsService {
    constructor() {
    }
    get catalogue() {
        return [
            { field: 'name', header: 'Nombre' },
            { field: 'description', header: 'Descripción' },
        ];
    }
};
ColsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ColsService);
export { ColsService };
//# sourceMappingURL=cols.service.js.map
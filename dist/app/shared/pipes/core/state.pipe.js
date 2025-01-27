import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let StatePipe = class StatePipe {
    transform(value) {
        return value === 'enabled' ? 'HABILITADO' : 'INHABILITADO';
    }
};
StatePipe = __decorate([
    Pipe({
        name: 'state'
    })
], StatePipe);
export { StatePipe };
//# sourceMappingURL=state.pipe.js.map
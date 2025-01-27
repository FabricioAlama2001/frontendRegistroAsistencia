import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let ActivePipe = class ActivePipe {
    transform(value) {
        if (value)
            return 'ACTIVE';
        return 'INACTIVE';
    }
};
ActivePipe = __decorate([
    Pipe({
        name: 'activeUser'
    })
], ActivePipe);
export { ActivePipe };
//# sourceMappingURL=active.pipe.js.map
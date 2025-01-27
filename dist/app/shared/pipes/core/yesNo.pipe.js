import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let YesNoPipe = class YesNoPipe {
    transform(value) {
        return value ? 'Si' : 'No';
    }
};
YesNoPipe = __decorate([
    Pipe({
        name: 'yesNo'
    })
], YesNoPipe);
export { YesNoPipe };
//# sourceMappingURL=yesNo.pipe.js.map
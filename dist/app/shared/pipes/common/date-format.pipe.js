import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let DateFormatPipe = class DateFormatPipe {
    transform(value, ...args) {
        if (typeof value === 'string') {
            const dateValid = value.includes('T');
            if (!dateValid) {
                value = `${value}T05:00:00.000Z`;
            }
        }
        return value;
    }
};
DateFormatPipe = __decorate([
    Pipe({
        name: 'dateFormat'
    })
], DateFormatPipe);
export { DateFormatPipe };
//# sourceMappingURL=date-format.pipe.js.map
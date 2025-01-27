import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { format } from "date-fns";
let CustomFormatDatePipe = class CustomFormatDatePipe {
    transform(value) {
        if (value) {
            return format(value, 'dd/MM/yyyy');
        }
        return '';
    }
};
CustomFormatDatePipe = __decorate([
    Pipe({
        name: 'customFormatDate'
    })
], CustomFormatDatePipe);
export { CustomFormatDatePipe };
//# sourceMappingURL=custom-format-date.pipe.js.map
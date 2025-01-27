import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SizesPipe = class SizesPipe {
    transform(value) {
        const size = parseFloat(value) / 1024;
        if (size > 1024) {
            return `${(size / 1024).toFixed(2)} MB`;
        }
        else {
            return `${size.toFixed(2)} KB`;
        }
    }
};
SizesPipe = __decorate([
    Pipe({
        name: 'fileSizes'
    })
], SizesPipe);
export { SizesPipe };
//# sourceMappingURL=sizes.pipe.js.map
import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let RolePipe = class RolePipe {
    transform(value) {
        if (value)
            value = value.toLowerCase();
        switch (value) {
            case 'admin':
                return 'Administrator';
            case 'teacher':
                return 'Teacher';
            case 'student':
                return 'Student';
        }
        return 'No Role';
    }
};
RolePipe = __decorate([
    Pipe({
        name: 'role'
    })
], RolePipe);
export { RolePipe };
//# sourceMappingURL=role.pipe.js.map
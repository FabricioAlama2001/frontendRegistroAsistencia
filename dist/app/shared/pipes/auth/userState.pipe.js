import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let UserStatePipe = class UserStatePipe {
    transform(user) {
        if (user.suspendedAt)
            return 'danger';
        if (user.maxAttempts === 0)
            return 'warning';
        return 'success';
    }
};
UserStatePipe = __decorate([
    Pipe({
        name: 'userState'
    })
], UserStatePipe);
export { UserStatePipe };
//# sourceMappingURL=userState.pipe.js.map
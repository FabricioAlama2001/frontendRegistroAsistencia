import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NotFoundComponent = class NotFoundComponent {
    constructor(_location) {
        this._location = _location;
    }
    ngOnInit() {
    }
    goBack() {
        this._location.back();
    }
};
NotFoundComponent = __decorate([
    Component({
        selector: 'app-not-found',
        templateUrl: './not-found.component.html',
        styleUrls: ['./not-found.component.css']
    })
], NotFoundComponent);
export { NotFoundComponent };
//# sourceMappingURL=not-found.component.js.map
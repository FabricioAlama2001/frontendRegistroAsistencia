import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { format } from "date-fns";
let FooterComponent = class FooterComponent {
    constructor() {
        this.Date = Date;
        this.format = format;
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss']
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map
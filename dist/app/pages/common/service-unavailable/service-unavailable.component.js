import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { core } from "@angular/compiler";
let ServiceUnavailableComponent = class ServiceUnavailableComponent {
    constructor(coreService) {
        this.coreService = coreService;
        this.core = core;
    }
    ngOnInit() {
    }
};
ServiceUnavailableComponent = __decorate([
    Component({
        selector: 'app-service-unavailable',
        templateUrl: './service-unavailable.component.html',
        styleUrls: ['./service-unavailable.component.css']
    })
], ServiceUnavailableComponent);
export { ServiceUnavailableComponent };
//# sourceMappingURL=service-unavailable.component.js.map
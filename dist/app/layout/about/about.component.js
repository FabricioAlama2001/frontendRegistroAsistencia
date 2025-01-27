import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PrimeIcons } from "primeng/api";
import { CoreMessageEnum } from "../../shared/enums";
let AboutComponent = class AboutComponent {
    constructor(coreService, clipboard, messageServicePn) {
        this.coreService = coreService;
        this.clipboard = clipboard;
        this.messageServicePn = messageServicePn;
        this.PrimeIcons = PrimeIcons;
    }
    copy(text) {
        this.clipboard.copy(text);
        this.messageServicePn.clear();
        this.messageServicePn.add({
            key: CoreMessageEnum.APP_TOAST,
            severity: 'info',
            summary: 'Copiado',
            detail: text,
        });
    }
};
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map
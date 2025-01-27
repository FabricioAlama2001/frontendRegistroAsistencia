import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BreadcrumbEnum } from "../../../../shared/enums";
let ProfileComponent = class ProfileComponent {
    constructor(breadcrumbService, messageService) {
        this.breadcrumbService = breadcrumbService;
        this.messageService = messageService;
        this.breadcrumbService.setItems([
            { label: BreadcrumbEnum.PROFILE }
        ]);
    }
    ngOnInit() {
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map
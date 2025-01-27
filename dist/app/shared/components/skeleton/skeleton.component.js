import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { SkeletonEnum } from "../../enums";
let SkeletonComponent = class SkeletonComponent {
    constructor() {
        this.SkeletonEnum = SkeletonEnum;
        this.type = SkeletonEnum.CARD;
        this.products = ['test1', 'test2', 'test3', 'test4', 'test5'];
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], SkeletonComponent.prototype, "type", void 0);
SkeletonComponent = __decorate([
    Component({
        selector: 'app-skeleton',
        templateUrl: './skeleton.component.html',
        styleUrls: ['./skeleton.component.scss']
    })
], SkeletonComponent);
export { SkeletonComponent };
//# sourceMappingURL=skeleton.component.js.map
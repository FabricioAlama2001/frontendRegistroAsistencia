import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { Validators } from "@angular/forms";
let LabelDirective = class LabelDirective {
    set required(value) {
        this._required = value?.hasValidator(Validators.required);
    }
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._required = false;
        this.label = '';
        this.nativeElement = elementRef.nativeElement;
        this.i = this.renderer.createElement('i');
    }
    ngOnInit() {
        if (this._required) {
            this.setFieldRequired();
        }
        else {
            this.setFieldNoRequired();
        }
    }
    setFieldRequired() {
        this.nativeElement.innerText = this.label + ':';
        const i = this.renderer.createElement('i');
        i.innerText = '*';
        this.renderer.addClass(i, 'p-error');
        this.renderer.addClass(i, 'ml-1');
        this.renderer.appendChild(this.nativeElement, i);
    }
    setFieldNoRequired() {
        this.nativeElement.innerText = this.label + ':';
    }
};
__decorate([
    Input()
], LabelDirective.prototype, "label", void 0);
__decorate([
    Input()
], LabelDirective.prototype, "required", null);
LabelDirective = __decorate([
    Directive({
        selector: '[appLabel]'
    })
], LabelDirective);
export { LabelDirective };
//# sourceMappingURL=label.directive.js.map
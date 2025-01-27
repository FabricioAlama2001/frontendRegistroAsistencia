import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
let InputSwitchComponent = class InputSwitchComponent {
    constructor() {
        this.selected = 'Si';
        this.unselected = 'No';
        this.disabled = false;
        this.value = new FormControl(false);
        this._onChanged = (_value) => {
        };
    }
    ngOnInit() {
        this.value.valueChanges.subscribe(value => {
            this._onChanged(value);
        });
        if (this.disabled) {
            this.value.disable();
        }
    }
    registerOnChange(fn) {
        this._onChanged = fn;
    }
    registerOnTouched(fn) {
    }
    writeValue(value) {
        if (value)
            this.value.patchValue(value);
    }
};
__decorate([
    Input()
], InputSwitchComponent.prototype, "selected", void 0);
__decorate([
    Input()
], InputSwitchComponent.prototype, "unselected", void 0);
__decorate([
    Input()
], InputSwitchComponent.prototype, "disabled", void 0);
InputSwitchComponent = __decorate([
    Component({
        selector: 'app-input-switch',
        templateUrl: './input-switch.component.html',
        styleUrl: './input-switch.component.scss',
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: InputSwitchComponent,
                multi: true
            }]
    })
], InputSwitchComponent);
export { InputSwitchComponent };
//# sourceMappingURL=input-switch.component.js.map
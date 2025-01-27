import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PrimeIcons } from "primeng/api";
import { RoutesEnum } from "../../enums";
let HeaderFormComponent = class HeaderFormComponent {
    constructor() {
        this.id = null;
        this.label = '';
        this.icon = '';
        this.message = `Todos los campos con <b class="p-error">*</b> son obligatorios.`;
        this.RoutesEnum = RoutesEnum;
        this.PrimeIcons = PrimeIcons;
    }
    ngOnInit() {
        if (!this.icon) {
            if (this.id === RoutesEnum.NEW) {
                this.icon = PrimeIcons.PLUS;
            }
            else {
                this.icon = PrimeIcons.PENCIL;
            }
        }
        if (!this.label) {
            if (this.id === RoutesEnum.NEW) {
                this.label = "Crear";
            }
            else {
                this.label = "Editar";
            }
        }
    }
};
__decorate([
    Input()
], HeaderFormComponent.prototype, "id", void 0);
__decorate([
    Input()
], HeaderFormComponent.prototype, "label", void 0);
__decorate([
    Input()
], HeaderFormComponent.prototype, "icon", void 0);
HeaderFormComponent = __decorate([
    Component({
        selector: 'app-header-form',
        templateUrl: './header-form.component.html',
        styleUrls: ['./header-form.component.scss']
    })
], HeaderFormComponent);
export { HeaderFormComponent };
//# sourceMappingURL=header-form.component.js.map
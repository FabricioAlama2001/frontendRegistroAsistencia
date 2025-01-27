import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LocationComponent = class LocationComponent {
    constructor(formBuilder, messageService, coreService) {
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.coreService = coreService;
        this.form = this.newForm;
    }
    get newForm() {
        return this.formBuilder.group({
            id: [null],
            country: [null],
            province: [null],
            canton: [null],
            parrish: [null],
        });
    }
    onSubmit() {
        if (this.form.valid) {
            if (this.idField.value) {
                // this.update(this.form.value);
            }
            else {
                // this.create(this.form.value);
            }
        }
        else {
            this.form.markAllAsTouched();
            this.messageService.errorsFields;
        }
    }
    get idField() {
        return this.form.controls['id'];
    }
    get countryField() {
        return this.form.controls['country'];
    }
    get provinceField() {
        return this.form.controls['province'];
    }
    get cantonField() {
        return this.form.controls['canton'];
    }
    get parrishField() {
        return this.form.controls['parrish'];
    }
};
LocationComponent = __decorate([
    Component({
        selector: 'app-location',
        templateUrl: './location.component.html',
        styleUrls: ['./location.component.scss']
    })
], LocationComponent);
export { LocationComponent };
//# sourceMappingURL=location.component.js.map
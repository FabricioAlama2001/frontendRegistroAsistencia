import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
import { PrimeIcons } from "primeng/api";
import { CustomValidators } from "../../../../shared/validators";
let PasswordChangeComponent = class PasswordChangeComponent {
    constructor(authHttpService, authService, activatedRoute, coreService, formBuilder, messageService) {
        this.authHttpService = authHttpService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.coreService = coreService;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.PrimeIcons = PrimeIcons;
        this.form = this.newForm();
    }
    ngOnInit() {
    }
    newForm() {
        return this.formBuilder.group({
            passwordConfirmation: [null, [Validators.required]],
            passwordNew: [null, [Validators.required, Validators.minLength(8)]],
            passwordOld: [null, [Validators.required]],
        }, { validators: CustomValidators.passwordMatchValidator });
    }
    onSubmit() {
        if (this.form.valid) {
            this.changePassword();
        }
        else {
            this.form.markAllAsTouched();
            this.messageService.errorsFields();
        }
    }
    changePassword() {
        this.authHttpService.changePassword(this.authService.auth.id, this.form.value).subscribe((_) => {
        });
    }
    get passwordConfirmationField() {
        return this.form.controls['passwordConfirmation'];
    }
    get passwordNewField() {
        return this.form.controls['passwordNew'];
    }
    get passwordOldField() {
        return this.form.controls['passwordOld'];
    }
};
PasswordChangeComponent = __decorate([
    Component({
        selector: 'app-password-change',
        templateUrl: './password-change.component.html',
        styleUrls: ['./password-change.component.scss']
    })
], PasswordChangeComponent);
export { PasswordChangeComponent };
//# sourceMappingURL=password-change.component.js.map
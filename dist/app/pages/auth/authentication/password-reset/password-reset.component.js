import { __decorate } from "tslib";
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { PrimeIcons } from "primeng/api";
import { CustomValidators } from "../../../../shared/validators";
import { AuthHttpService, AuthService } from "../../../../services/app/auth";
import { CoreService, MessageService, RoutesService } from "../../../../services/app/core";
import { LoginFormEnum } from "../../../../shared/enums";
let PasswordResetComponent = class PasswordResetComponent {
    constructor() {
        //Services
        this.coreService = inject(CoreService);
        this.formBuilder = inject(FormBuilder);
        this.authHttpService = inject(AuthHttpService);
        this.messageService = inject(MessageService);
        this.authService = inject(AuthService);
        this.routesService = inject(RoutesService);
        //Enums
        this.PrimeIcons = PrimeIcons;
        //Flags
        this.isValidTransactionalCode = false;
        this.isRequestTransactionalCode = false;
        this.LoginFormEnum = LoginFormEnum;
        this.buildForm();
    }
    ngOnInit() {
    }
    buildForm() {
        this.form = this.formBuilder.group({
            transactionalCode: [null, [Validators.required, Validators.minLength(6)]],
            passwordNew: [null, [Validators.required, Validators.minLength(8)]],
            passwordConfirmation: [null, [Validators.required]],
            username: [null, [Validators.required]],
        }, { validators: CustomValidators.passwordMatchValidator });
    }
    onSubmit() {
        if (this.form.valid) {
            this.resetPassword();
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    resetPassword() {
        this.authHttpService.resetPassword(this.form.value).subscribe(() => this.routesService.login());
    }
    requestTransactionalCode() {
        if (this.usernameField.valid) {
            this.isRequestTransactionalCode = false;
            this.transactionalCodeField.reset();
            this.authHttpService.requestTransactionalCode(this.usernameField.value).subscribe(() => this.isRequestTransactionalCode = true);
        }
        else {
            this.usernameField.markAsTouched();
        }
    }
    verifyTransactionalCode() {
        if (this.usernameField.valid) {
            this.isValidTransactionalCode = false;
            this.authHttpService.verifyTransactionalCode(this.transactionalCodeField.value, this.usernameField.value).subscribe(() => this.isValidTransactionalCode = true);
        }
        else {
            this.transactionalCodeField.markAsTouched();
        }
    }
    redirectLogin() {
        this.routesService.login();
    }
    get usernameField() {
        return this.form.controls['username'];
    }
    get transactionalCodeField() {
        return this.form.controls['transactionalCode'];
    }
    get passwordNewField() {
        return this.form.controls['passwordNew'];
    }
    get passwordConfirmationField() {
        return this.form.controls['passwordConfirmation'];
    }
};
PasswordResetComponent = __decorate([
    Component({
        selector: 'app-password-reset',
        templateUrl: './password-reset.component.html',
        styleUrls: ['./password-reset.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], PasswordResetComponent);
export { PasswordResetComponent };
//# sourceMappingURL=password-reset.component.js.map
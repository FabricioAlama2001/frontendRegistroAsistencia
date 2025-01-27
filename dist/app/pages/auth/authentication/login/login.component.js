import { __decorate } from "tslib";
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PrimeIcons } from "primeng/api";
import { AuthHttpService, AuthService } from "../../../../services/app/auth";
import { CoreService, MessageService, RoutesService } from "../../../../services/app/core";
import { LoginFormEnum } from "../../../../shared/enums";
import { environment } from "../../../../../environments/environment";
let LoginComponent = class LoginComponent {
    constructor() {
        //Services
        this.authService = inject(AuthService);
        this.authHttpService = inject(AuthHttpService);
        this.coreService = inject(CoreService);
        this.formBuilder = inject(FormBuilder);
        this.messageService = inject(MessageService);
        this.routesService = inject(RoutesService);
        //Enums
        this.PrimeIcons = PrimeIcons;
        this.LoginFormEnum = LoginFormEnum;
        this.environment = environment;
        this.authService.removeLogin();
        this.buildForm();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            // username: ['juan.perez', [Validators.required,Validators.pattern(userName())]],
            username: [null, [Validators.required]],
            // password: ['123', [Validators.required]],
            password: [null, [Validators.required]],
        });
        this.checkValueChanges();
    }
    checkValueChanges() {
    }
    onSubmit() {
        if (this.usernameField.value)
            this.usernameField.patchValue(this.usernameField.value.trim());
        if (this.form.valid) {
            this.login();
        }
        else {
            this.form.markAllAsTouched();
            this.messageService.errorsFields();
        }
    }
    login() {
        this.authService.removeLogin();
        this.authHttpService.login(this.form.value)
            .subscribe(response => {
            if (this.authService.roles.length === 0) {
                this.messageService.errorCustom('Sin Rol', 'No cuenta con un rol asignado');
                this.authService.removeLogin();
                return;
            }
            this.routesService.roleSelect();
        });
    }
    /** Getters **/
    get usernameField() {
        return this.form.controls['username'];
    }
    get passwordField() {
        return this.form.controls['password'];
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
        encapsulation: ViewEncapsulation.None,
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
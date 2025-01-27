import { __decorate } from "tslib";
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { PrimeIcons } from "primeng/api";
import { AuthService } from "../../../../services/app/auth";
import { CoreService, MessageService, RoutesService } from "../../../../services/app/core";
import { LoginFormEnum } from "../../../../shared/enums";
let RoleSelectComponent = class RoleSelectComponent {
    constructor() {
        //Services
        this.coreService = inject(CoreService);
        this.formBuilder = inject(FormBuilder);
        this.messageService = inject(MessageService);
        this.authService = inject(AuthService);
        this.routesService = inject(RoutesService);
        this.roles = [];
        //Enums
        this.LoginFormEnum = LoginFormEnum;
        this.PrimeIcons = PrimeIcons;
        this.buildForm();
    }
    ngOnInit() {
        this.roles = this.authService.roles;
    }
    buildForm() {
        this.form = this.formBuilder.group({
            role: [null, [Validators.required]],
            fiscalYear: [null],
            unit: [null],
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.selectRole();
        }
        else {
            this.form.markAllAsTouched();
            this.messageService.errorsFields();
        }
    }
    selectRole() {
        this.authService.role = this.roleField.value;
        this.authService.selectDashboard();
    }
    redirectLogin() {
        this.routesService.login();
    }
    get roleField() {
        return this.form.controls['role'];
    }
};
RoleSelectComponent = __decorate([
    Component({
        selector: 'app-role-select',
        templateUrl: './role-select.component.html',
        styleUrls: ['./role-select.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], RoleSelectComponent);
export { RoleSelectComponent };
//# sourceMappingURL=role-select.component.js.map
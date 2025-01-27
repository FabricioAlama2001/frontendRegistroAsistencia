import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { SkeletonEnum } from "../../../../../shared/enums";
import { PrimeIcons } from "primeng/api";
let UserInformationComponent = class UserInformationComponent {
    constructor(activatedRoute, authService, authHttpService, breadcrumbService, cataloguesHttpService, coreService, formBuilder, messageDialogService) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.authHttpService = authHttpService;
        this.breadcrumbService = breadcrumbService;
        this.cataloguesHttpService = cataloguesHttpService;
        this.coreService = coreService;
        this.formBuilder = formBuilder;
        this.messageDialogService = messageDialogService;
        this.PrimeIcons = PrimeIcons;
        this.SkeletonEnum = SkeletonEnum;
        this.form = this.newForm;
    }
    async onExit() {
        if (this.form.touched && this.form.dirty) {
            // return await this.messageDialogService.questionOnExit().then(result => result.isConfirmed);
        }
        return true;
    }
    ngOnInit() {
        this.getUserInformation();
    }
    get newForm() {
        return this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            emailVerifiedAt: [{ value: null, disabled: true }],
            phone: [null, []],
            // roles: [['admin'], []],
            username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.updateUserInformation(this.form.value);
        }
        else {
            this.form.markAllAsTouched();
            // this.messageService.errorsFields();
        }
    }
    getUserInformation() {
        this.authHttpService.getUserInformation().subscribe((user) => {
            this.form.patchValue(user);
        });
    }
    updateUserInformation(user) {
        this.authHttpService.updateUserInformation(user).subscribe((user) => {
            this.form.reset(user);
            this.authService.auth = user;
        });
    }
    get emailField() {
        return this.form.controls['email'];
    }
    get emailVerifiedAtField() {
        return this.form.controls['emailVerifiedAt'];
    }
    get phoneField() {
        return this.form.controls['phone'];
    }
    get usernameField() {
        return this.form.controls['username'];
    }
};
UserInformationComponent = __decorate([
    Component({
        selector: 'app-user-information',
        templateUrl: './user-information.component.html',
        styleUrls: ['./user-information.component.scss']
    })
], UserInformationComponent);
export { UserInformationComponent };
//# sourceMappingURL=user-information.component.js.map
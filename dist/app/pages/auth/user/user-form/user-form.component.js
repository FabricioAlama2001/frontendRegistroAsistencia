import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PrimeIcons } from "primeng/api";
import { BreadcrumbEnum, CatalogueTypeEnum, IconButtonActionEnum, LabelButtonActionEnum, RoutesEnum, SeverityButtonActionEnum, SkeletonEnum, UsersFormEnum, CatalogueUsersIdentificationTypeEnum } from "../../../../shared/enums";
let UserFormComponent = class UserFormComponent {
    constructor(breadcrumbService, coreService, formBuilder, messageService, router, routesService, rolesHttpService, cataloguesHttpService, usersHttpService) {
        this.breadcrumbService = breadcrumbService;
        this.coreService = coreService;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.router = router;
        this.routesService = routesService;
        this.rolesHttpService = rolesHttpService;
        this.cataloguesHttpService = cataloguesHttpService;
        this.usersHttpService = usersHttpService;
        this.PrimeIcons = PrimeIcons;
        this.SeverityButtonActionEnum = SeverityButtonActionEnum;
        this.IconButtonActionEnum = IconButtonActionEnum;
        this.LabelButtonActionEnum = LabelButtonActionEnum;
        this.UsersFormEnum = UsersFormEnum;
        this.SkeletonEnum = SkeletonEnum;
        this.helpText = '';
        this.id = '';
        this.formErrors = [];
        this.roles = [];
        this.identificationTypes = [];
        this.isChangePassword = new FormControl(false);
        this.saving = true;
        this.breadcrumbService.setItems([
            { label: BreadcrumbEnum.USERS, routerLink: [this.routesService.users] },
            { label: BreadcrumbEnum.FORM },
        ]);
        this.form = this.newForm;
        this.validateFormFields();
    }
    validateFormFields() {
        this.identificationTypeField.valueChanges.subscribe(value => {
            if (value) {
                this.identificationField.enable();
            }
            else {
                this.identificationField.disable();
            }
            if (value.code === CatalogueUsersIdentificationTypeEnum.IDENTIFICATION) {
                this.identificationField.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
            }
            else {
                this.identificationField.setValidators([Validators.required]);
            }
            this.identificationField.updateValueAndValidity();
        });
    }
    async onExit() {
        if ((this.form.touched || this.form.dirty) && this.saving) {
            // return await this.messageService.questionOnExit().then(result => result.isConfirmed);
        }
        return true;
    }
    ngOnInit() {
        this.loadRoles();
        this.loadIdentificationTypes();
        if (this.id != RoutesEnum.NEW) {
            this.get();
            this.passwordField.clearValidators();
        }
        else {
            this.isChangePassword.setValue(true);
            this.passwordField.enable();
            this.passwordChangedField.enable();
        }
    }
    get newForm() {
        return this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            identification: [{
                    value: null,
                    disabled: true
                }, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            identificationType: [null, [Validators.required]],
            lastname: [null, [Validators.required]],
            name: [null, [Validators.required]],
            password: [{ value: null, disabled: true }, [Validators.required, Validators.minLength(8)]],
            passwordChanged: [{ value: true, disabled: true }],
            roles: [null, [Validators.required]],
            username: [null, [Validators.required]],
            units: [null, [Validators.required]],
        });
    }
    get validateFormErrors() {
        this.formErrors = [];
        if (this.emailField.errors)
            this.formErrors.push(UsersFormEnum.email);
        if (this.identificationField.errors)
            this.formErrors.push(UsersFormEnum.identification);
        if (this.identificationTypeField.errors)
            this.formErrors.push(UsersFormEnum.identificationType);
        if (this.lastnameField.errors)
            this.formErrors.push(UsersFormEnum.lastname);
        if (this.nameField.errors)
            this.formErrors.push(UsersFormEnum.name);
        if (this.passwordField.errors)
            this.formErrors.push(UsersFormEnum.password);
        if (this.passwordChangedField.errors)
            this.formErrors.push(UsersFormEnum.passwordChanged);
        if (this.rolesField.errors)
            this.formErrors.push(UsersFormEnum.roles);
        this.formErrors.sort();
        return this.formErrors.length === 0 && this.form.valid;
    }
    get() {
        this.usersHttpService.findOne(this.id).subscribe((user) => {
            this.form.patchValue(user);
        });
    }
    onSubmit() {
        this.usernameField.setValue(this.identificationField.value);
        if (this.validateFormErrors) {
            if (this.id != RoutesEnum.NEW) {
                this.update(this.form.value);
            }
            else {
                this.create(this.form.value);
            }
        }
        else {
            this.form.markAllAsTouched();
            this.messageService.errorsFields(this.formErrors);
        }
    }
    back() {
        this.router.navigate([this.routesService.users]);
    }
    create(user) {
        user.passwordChanged = !user.passwordChanged;
        this.usersHttpService.create(user).subscribe(user => {
            //this.form.reset(user);
            this.saving = false;
            this.back();
        });
    }
    update(user) {
        user.passwordChanged = !user.passwordChanged;
        this.usersHttpService.update(this.id, user).subscribe((user) => {
            //this.form.reset(user);
            this.saving = false;
            this.back();
        });
    }
    loadRoles() {
        this.rolesHttpService.findAll().subscribe((roles) => this.roles = roles);
    }
    loadIdentificationTypes() {
        this.identificationTypes = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_IDENTIFICATION_TYPE);
    }
    handleChangePassword(event) {
        this.isChangePassword.setValue(event.checked);
        if (this.isChangePassword.value) {
            this.passwordChangedField.enable();
            this.passwordField.enable();
            this.passwordField.setValidators([Validators.required, Validators.minLength(8)]);
        }
        else {
            this.passwordChangedField.setValue(false);
            this.passwordChangedField.disable();
            this.passwordField.setValue(null);
            this.passwordField.disable();
            this.passwordField.clearValidators();
        }
        this.passwordField.updateValueAndValidity();
    }
    get emailField() {
        return this.form.controls['email'];
    }
    get identificationField() {
        return this.form.controls['identification'];
    }
    get identificationTypeField() {
        return this.form.controls['identificationType'];
    }
    get lastnameField() {
        return this.form.controls['lastname'];
    }
    get nameField() {
        return this.form.controls['name'];
    }
    get passwordField() {
        return this.form.controls['password'];
    }
    get passwordChangedField() {
        return this.form.controls['passwordChanged'];
    }
    get rolesField() {
        return this.form.controls['roles'];
    }
    get usernameField() {
        return this.form.controls['username'];
    }
    get unitsField() {
        return this.form.controls['units'];
    }
};
__decorate([
    Input()
], UserFormComponent.prototype, "id", void 0);
UserFormComponent = __decorate([
    Component({
        selector: 'app-user-form',
        templateUrl: './user-form.component.html',
        styleUrls: ['./user-form.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], UserFormComponent);
export { UserFormComponent };
//# sourceMappingURL=user-form.component.js.map
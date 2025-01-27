import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimeIcons } from "primeng/api";
import { DateValidators } from "../../../../../shared/validators";
import { DateFormatPipe } from "../../../../../shared/pipes";
import { CatalogueTypeEnum, SkeletonEnum, CatalogueUsersIdentificationTypeEnum } from "../../../../../shared/enums";
import { environment } from "../../../../../../environments/environment";
let UserProfileComponent = class UserProfileComponent {
    constructor(activatedRoute, authService, authHttpService, breadcrumbService, cataloguesHttpService, coreService, formBuilder, messageDialogService, messageService) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.authHttpService = authHttpService;
        this.breadcrumbService = breadcrumbService;
        this.cataloguesHttpService = cataloguesHttpService;
        this.coreService = coreService;
        this.formBuilder = formBuilder;
        this.messageDialogService = messageDialogService;
        this.messageService = messageService;
        this.PrimeIcons = PrimeIcons;
        this.SkeletonEnum = SkeletonEnum;
        this.HOST_URL = environment.API_URL;
        this.dateFormat = new DateFormatPipe();
        this.bloodTypes = [];
        this.ethnicOrigins = [];
        this.genders = [];
        this.identificationTypes = [];
        this.maritalStatus = [];
        this.sexes = [];
        this.form = this.newForm;
        this.identificationField.valueChanges.subscribe(value => {
            if (value.code === CatalogueUsersIdentificationTypeEnum.IDENTIFICATION) {
                this.identificationField.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
            }
            else {
                this.identificationField.clearValidators();
            }
        });
    }
    onExit() {
        if (this.form.touched && this.form.dirty) {
            this.messageDialogService.questionOnExit().subscribe();
        }
        return true;
    }
    ngOnInit() {
        this.loadBloodTypes();
        this.loadEthnicOrigins();
        this.loadGenders();
        this.loadIdentificationTypes();
        this.loadMaritalStatus();
        this.loadSexes();
        this.getProfile();
    }
    get newForm() {
        return this.formBuilder.group({
            avatar: [null],
            birthdate: [null, [DateValidators.max(new Date())]],
            bloodType: [null, []],
            ethnicOrigin: [null, []],
            gender: [null, []],
            identification: [null, [Validators.required]],
            identificationType: [null, [Validators.required]],
            lastname: [null, [Validators.required]],
            maritalStatus: [null, []],
            name: [null, [Validators.required]],
            sex: [null, []],
        });
    }
    onSubmitProfile() {
        if (this.birthdateField.value)
            this.birthdateField.setValue(this.dateFormat.transform(this.birthdateField.value));
        if (this.form.valid) {
            this.updateProfile(this.form.value);
        }
        else {
            this.form.markAllAsTouched();
            this.messageService.errorsFields();
        }
    }
    getProfile() {
        this.authHttpService.getProfile().subscribe((user) => {
            this.form.patchValue(user);
            if (this.birthdateField.value)
                this.birthdateField.setValue(new Date(this.birthdateField.value));
        });
    }
    loadBloodTypes() {
        this.bloodTypes = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_BLOOD_TYPE);
    }
    loadEthnicOrigins() {
        this.ethnicOrigins = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_ETHNIC_ORIGIN);
    }
    loadGenders() {
        this.genders = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_GENDER);
    }
    loadIdentificationTypes() {
        this.identificationTypes = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_IDENTIFICATION_TYPE);
    }
    loadMaritalStatus() {
        this.maritalStatus = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_MARITAL_STATUS);
    }
    loadSexes() {
        this.sexes = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_SEX);
    }
    updateProfile(user) {
        this.authHttpService.updateProfile(user).subscribe((user) => {
            this.getProfile();
        });
    }
    uploadAvatar(event, uploadFiles) {
        const formData = new FormData();
        formData.append('avatar', event.files[0]);
        this.authHttpService.uploadAvatar(this.authService.auth.id, formData).subscribe(response => {
            uploadFiles.clear();
            this, this.authService.avatar = response.avatar;
            this.getProfile();
        }, error => uploadFiles.clear());
    }
    get avatarField() {
        return this.form.controls['avatar'];
    }
    get bloodTypeField() {
        return this.form.controls['bloodType'];
    }
    get birthdateField() {
        return this.form.controls['birthdate'];
    }
    get ethnicOriginField() {
        return this.form.controls['ethnicOrigin'];
    }
    get genderField() {
        return this.form.controls['gender'];
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
    get maritalStatusField() {
        return this.form.controls['maritalStatus'];
    }
    get nameField() {
        return this.form.controls['name'];
    }
    get sexField() {
        return this.form.controls['sex'];
    }
};
UserProfileComponent = __decorate([
    Component({
        selector: 'app-user-profile',
        templateUrl: './user-profile.component.html',
        styleUrls: ['./user-profile.component.scss']
    })
], UserProfileComponent);
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map
import { __decorate } from "tslib";
import { Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';
let ErrorMessageDirective = class ErrorMessageDirective {
    constructor() {
        this.elementRef = inject(ElementRef);
        this.renderer = inject(Renderer2);
        this._errors = null;
        this._dirty = false;
        this._touched = false;
        this._nativeElement = this.elementRef.nativeElement;
    }
    set touched(value) {
        this._touched = value;
        this.setErrorMessage();
    }
    ;
    set dirty(value) {
        this._dirty = value;
        this.setErrorMessage();
    }
    ;
    set errors(value) {
        this._errors = value;
        this.setErrorMessage();
    }
    setErrorMessage() {
        let text = '';
        if ((this._touched || this._dirty) && this._errors) {
            if (this._errors['required']) {
                text = this.fieldRequired;
            }
            if (this._errors['requiredTrue']) {
                text = this.fieldRequired;
            }
            if (this._errors['email']) {
                text = this.fieldEmail;
            }
            if (this._errors['minlength']) {
                text = this.fieldMinLength(this._errors);
            }
            if (this._errors['maxlength']) {
                text = this.fieldMaxLength(this._errors);
            }
            if (this._errors['min']) {
                text = this.fieldMin(this._errors);
            }
            if (this._errors['max']) {
                text = this.fieldMax(this._errors);
            }
            if (this._errors['pattern']) {
                text = this.fieldPattern;
            }
            if (this._errors['identification']) {
                text = this.fieldIdentification;
            }
            if (this._errors['noPasswordMatch']) {
                text = this.fieldNoPasswordMatch;
            }
            if (this._errors['userNotAvailable']) {
                text = this.fieldUserNotAvailable;
            }
            if (this._errors['userAvailable']) {
                text = this.fieldUserAvailable;
            }
            if (this._errors['emailNotAvailable']) {
                text = this.fieldEmailNotAvailable;
            }
            if (this._errors['phoneNotAvailable']) {
                text = this.fieldPhoneNotAvailable;
            }
            if (this._errors['dateInvalid']) {
                text = this.fieldDateValid;
            }
            if (this._errors['dateMax']) {
                text = this.fieldDateMax(this._errors);
            }
            if (this._errors['dateMin']) {
                text = this.fieldDateMin(this._errors);
            }
            if (this._errors['agreementExists']) {
                text = this.fieldAgreementExists;
            }
            this.renderer.addClass(this.elementRef.nativeElement, 'p-error');
        }
        this._nativeElement.innerText = text;
    }
    get fieldRequired() {
        return 'El campo es obligatorio.';
    }
    get fieldEmail() {
        return 'Correo electrónico no es válido.';
    }
    fieldMinLength(errors) {
        return `Debe contener como mínimo ${errors['minlength']['requiredLength']} caracteres.`;
    }
    fieldMaxLength(errors) {
        return `Debe contener como máximo de caracteres ${errors['maxlength']['requiredLength']}.`;
    }
    fieldMin(errors) {
        return `Número mínimo permitido es ${errors['min']['min']}.`;
    }
    fieldMax(errors) {
        return `Número maximo permitido es ${errors['max']['max']}.`;
    }
    get fieldPattern() {
        return `No cumple con el formato.`;
    }
    get fieldNoPasswordMatch() {
        return 'Las contraseñas no coinciden.';
    }
    get fieldDateValid() {
        return 'No es una fecha válida.';
    }
    fieldDateMax(errors) {
        return `La fecha ${errors['dateMax']['actualDate']} no puede ser mayor a ${errors['dateMax']['requiredDate']}.`;
    }
    fieldDateMin(errors) {
        return `La fecha ${errors['dateMin']['actualDate']} no puede ser menor a ${errors['dateMin']['requiredDate']}.`;
    }
    get fieldIdentification() {
        return `No cumple con el formato de una cédula Ecuatoriana.`;
    }
    get fieldUserNotAvailable() {
        return 'Este usuario ya se encuentra registrado.';
    }
    get fieldUserAvailable() {
        return 'Usuario está disponible.';
    }
    get fieldEmailNotAvailable() {
        return 'Este correo electrónico no está disponible.';
    }
    get fieldPhoneNotAvailable() {
        return 'Este teléfono no está disponible.';
    }
    get fieldAgreementExists() {
        return 'El número interno de convenio ya se encuentra registrado.';
    }
};
__decorate([
    Input()
], ErrorMessageDirective.prototype, "touched", null);
__decorate([
    Input()
], ErrorMessageDirective.prototype, "dirty", null);
__decorate([
    Input()
], ErrorMessageDirective.prototype, "errors", null);
ErrorMessageDirective = __decorate([
    Directive({
        selector: '[appErrorMessage]'
    })
], ErrorMessageDirective);
export { ErrorMessageDirective };
//# sourceMappingURL=error-message.directive.js.map
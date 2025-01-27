import { Validators } from '@angular/forms';
import { map } from "rxjs/operators";
export class CustomValidators {
    static required({ value }) {
        if (value)
            return value.hasValidator(Validators.required);
        else
            return false;
    }
    static passwordMatchValidator(control) {
        const passwordNew = control.get('passwordNew')?.value;
        const passwordConfirmation = control.get('passwordConfirmation')?.value;
        if (passwordNew !== passwordConfirmation) {
            control.get('passwordConfirmation')?.setErrors({ noPasswordMatch: true });
            return { noPasswordMatch: true };
        }
        else {
            control.get('passwordConfirmation')?.setErrors(null);
            return null;
        }
    }
    static verifyUser(authHttpService) {
        return (control) => {
            const value = control.value;
            return authHttpService.verifyUser(value)
                .pipe(map(response => {
                return response.data === null ? null : { userNotAvailable: true };
            }));
        };
    }
    static validateUser(authHttpService) {
        return (control) => {
            const value = control.value;
            return authHttpService.verifyUser(value)
                .pipe(map(response => {
                return response.data === null ? null : { userAvailable: true };
            }));
        };
    }
    static verifyEmail(authHttpService) {
        return (control) => {
            const value = control.value;
            return authHttpService.verifyEmail(value)
                .pipe(map(response => {
                return response.data === null ? null : { emailNotAvailable: true };
            }));
        };
    }
    static verifyPhone(authHttpService) {
        return (control) => {
            const value = control.value;
            return authHttpService.verifyPhone(value)
                .pipe(map(response => {
                return response.data === null ? null : { phoneNotAvailable: true };
            }));
        };
    }
}
//# sourceMappingURL=custom-validators.js.map
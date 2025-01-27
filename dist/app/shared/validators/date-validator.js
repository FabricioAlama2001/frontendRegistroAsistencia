import { isBefore, isAfter, format } from 'date-fns';
export class DateValidators {
    static valid(control) {
        const value = control.value;
        if (value && !isNaN(new Date(value).getDate())) {
            return null;
        }
        return { dateInvalid: true };
    }
    static max(maxDate) {
        return (control) => {
            const value = new Date(control.value);
            const isValid = value ? isBefore(value, maxDate) : true;
            return isValid ? null : {
                dateMax: {
                    actualDate: format(value, 'yyyy-MM-dd'),
                    requiredDate: format(maxDate, 'yyyy-MM-dd')
                }
            };
        };
    }
    static min(minDate) {
        return (control) => {
            const value = new Date(control.value);
            const isValid = value ? isAfter(value, minDate) : true;
            return isValid ? null : {
                dateMin: {
                    actualDate: format(value, 'yyyy-MM-dd'),
                    requiredDate: format(minDate, 'yyyy-MM-dd')
                }
            };
        };
    }
}
//# sourceMappingURL=date-validator.js.map
import { format } from "date-fns";
export function getFormattedDate(value) {
    return new Date(value);
    if (value.toString().includes('T')) {
        return format(value, 'MM-dd-yyyy');
    }
    return '';
}
//# sourceMappingURL=date.helper.js.map
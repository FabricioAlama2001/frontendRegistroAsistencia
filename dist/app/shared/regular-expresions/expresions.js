export class Expressions {
    static get alphaSpaces() {
        return '[a-zA-Z]';
    }
    static get email() {
        return '^[^@]+@[^@]+\\.[a-zA-Z]{2,}$';
    }
    static get url() {
        return '^https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*$';
    }
}
export const userName = () => {
    return '[\\w\\-]+(\\.[\\w \\-]+)';
};
//# sourceMappingURL=expresions.js.map
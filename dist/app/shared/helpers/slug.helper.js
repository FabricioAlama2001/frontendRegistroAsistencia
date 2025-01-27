export function getSlug(value) {
    return value.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
//# sourceMappingURL=slug.helper.js.map
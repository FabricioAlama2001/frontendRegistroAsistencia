export function getHigherSort(items) {
    const sorts = items.map(item => item.sort);
    if (sorts.length === 0) {
        return 1;
    }
    return Math.max(...sorts) + 1;
}
//# sourceMappingURL=list.helper.js.map
Object.defineProperty(Array.prototype, 'sortedFindIndex', {
    value: function sortedFindIndex(target) {
        const arr = this;
        if (arr.length === 0) {
            return undefined;
        }
        let left = 0;
        let right = arr.length;
        while (right - left > 1) {
            const mid = Math.floor((left + right) / 2);
            const value = arr[mid];
            if (value === target) {
                return mid;
            }
            if (value < target) {
                left = mid;
            } else {
                right = mid;
            }
        }
        if (arr[0] > target) {
            return -1;
        }
        return left;
    },
    writable: false,
});

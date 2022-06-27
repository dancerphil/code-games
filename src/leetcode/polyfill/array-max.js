Object.defineProperty(Array.prototype, 'max', {
    value: function max() {
        const arr = this;
        if (arr.length === 0) {
            return undefined;
        }
        let maxNumber = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (item > maxNumber) {
                maxNumber = item;
            }
        }
        return maxNumber;
    },
    writable: false,
});

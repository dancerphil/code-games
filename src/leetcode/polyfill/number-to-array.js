Object.defineProperty(Number.prototype, 'toArray', {
    value: function isSquare() {
        let number = this;
        const arr = [];
        while (number > 0) {
            arr.push(number % 10);
            number = Math.floor(number / 10);
        }
        arr.reverse();
        return arr;
    },
    writable: false,
});

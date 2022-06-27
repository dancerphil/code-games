Object.defineProperty(Number.prototype, 'isSquare', {
    value: function isSquare() {
        const number = this;
        return Math.round(Math.sqrt(number)) ** 2 === number; // NOTE must use == on leetcode
    },
    writable: false,
});

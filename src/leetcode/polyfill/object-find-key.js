Object.defineProperty(Object.prototype, 'findKey', {
    value: function findKey(func) {
        const object = this;
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const item = object[key];
            if (func(item)) {
                return key;
            }
        }
        return undefined;
    },
    writable: false,
});

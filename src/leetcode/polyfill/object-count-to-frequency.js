Object.defineProperty(Object.prototype, 'countToFrequency', {
    value: function countToFrequency() {
        const object = this;
        const keys = Object.keys(object);
        const ans = [];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const count = object[key];
            ans.push({key, count});
        }
        return ans;
    },
    writable: false,
});

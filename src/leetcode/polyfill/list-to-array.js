import ListNode from '../dataStructure/ListNode';

Object.defineProperty(ListNode.prototype, 'toArray', {
    value: function toArray() {
        const list = this;
        let node = list;
        const ans = [];
        while (node !== null) {
            const {val, next} = node;
            ans.push(val);
            node = next;
        }
        return ans;
    },
    writable: false,
});

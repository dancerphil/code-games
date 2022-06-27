import ListNode from '../../dataStructure/ListNode';
import '../list-to-array';

describe('polyfill list-to-array', () => {
    test('value', () => {
        const list = new ListNode(0);
        list.next = new ListNode(1);
        expect(list.toArray()).toEqual([0, 1]);
    });
});

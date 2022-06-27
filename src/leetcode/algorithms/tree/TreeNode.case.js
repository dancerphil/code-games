import TreeNode from '../../dataStructure/TreeNode';

let i = 0;

const next = () => new TreeNode(i++);

const single = next();

const left = (() => {
    const ans = next();
    ans.left = next();
    return ans;
})();

const right = (() => {
    const ans = next();
    ans.right = next();
    return ans;
})();

const leftleft = (() => {
    const ans = next();
    ans.left = next();
    ans.left.left = next();
    return ans;
})();

const leftright = (() => {
    const ans = next();
    ans.left = next();
    ans.left.right = next();
    return ans;
})();

const rightleft = (() => {
    const ans = next();
    ans.right = next();
    ans.right.left = next();
    return ans;
})();

const rightright = (() => {
    const ans = next();
    ans.right = next();
    ans.right.right = next();
    return ans;
})();

const third0 = (() => {
    const ans = next();
    ans.left = next();
    ans.right = next();
    return ans;
})();

const third1 = (() => {
    const ans = next();
    ans.left = next();
    ans.right = next();
    ans.left.left = next();
    return ans;
})();

const third2 = (() => {
    const ans = next();
    ans.left = next();
    ans.right = next();
    ans.left.right = next();
    return ans;
})();

const third3 = (() => {
    const ans = next();
    ans.left = next();
    ans.right = next();
    ans.right.left = next();
    return ans;
})();

const third4 = (() => {
    const ans = next();
    ans.left = next();
    ans.right = next();
    ans.right.right = next();
    return ans;
})();

export default [single, left, right, leftleft, leftright, rightleft, rightright, third0, third1, third2, third3, third4];

const pushToArray = (ans, node) => {
  if (node === null) {
    ans.push(null);
  } else {
    ans.push(node.val === null ? [] : node.val);
  }
};

const recurseToArray = (ans, node) => {
  if (!node) return;
  const { left, right } = node;
  pushToArray(ans, left);
  pushToArray(ans, right);
  recurseToArray(ans, left);
  recurseToArray(ans, right);
};

const toArray = (node) => {
  const ans = [];
  pushToArray(ans, node);
  recurseToArray(ans, node);
  while (ans[ans.length - 1] === null)ans.pop();
  return ans;
};

export default toArray;

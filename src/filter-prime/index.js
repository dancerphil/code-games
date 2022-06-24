// 筛法求素数
const filterPrime = (n) => {
  // 初始化
  const arr = Array.from({ length: n }).fill(true);
  arr[0] = false;
  arr[1] = false;

  // 下一个未筛质数
  const nextPointer = (pointer) => {
    for (let i = pointer + 1; i * i <= n; i++) {
      if (arr[i]) {
        return i;
      }
    }
    return undefined;
  };

  // 筛子
  const fillWith = (pointer) => {
    for (let i = pointer * pointer; i <= n; i += pointer) {
      arr[i] = false;
    }
  };

  // format 解
  const toResult = () => {
    const result = [];
    for (let i = 0; i <= n; i++) {
      if (arr[i]) {
        result.push(i);
      }
    }
    return result;
  };

  // 主循环
  for (let pointer = 2; pointer; pointer = nextPointer(pointer)) {
    fillWith(pointer);
  }

  return toResult();
};

export default filterPrime;

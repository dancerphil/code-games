const createUnionFindSet = () => {
  const Fa = {};

  const find = (x) => {
    if (!Fa[x]) {
      Fa[x] = x;
    }
    if (x === Fa[x]) {
      return x;
    }
    // 路径优化
    Fa[x] = find(Fa[x]);
    return Fa[x];
  };

  const union = (a, b) => {
    const indexA = find(a);
    const indexB = find(b);
    Fa[indexB] = indexA;
  };

  const init = (x) => {
    Fa[x] = x;
  };

  const count = () => Object.entries(Fa).filter(([k, v]) => k === v).length;

  const toValue = () => Fa;
  return { find, union, init, count, toValue };
};

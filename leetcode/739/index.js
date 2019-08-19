// for leetcode reason
// const indexMap = {};

const dailyTemperatures = (T) => {
  const indexMap = {};
  const arr = [];
  for (let i = T.length - 1; i >= 0; i--) {
    const temperature = T[i];
    for (let j = 30; j < temperature; j++) {
      indexMap[j] = i;
    }
    arr.push(indexMap[temperature] ? indexMap[temperature] - i : 0);
  }
  return arr.reverse();
};

export default dailyTemperatures;

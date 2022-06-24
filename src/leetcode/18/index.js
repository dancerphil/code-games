import '../polyfill/Array-is-equal';

function uniq(array, isEqual) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (result.find(item => isEqual(item, value))) {
      // do nothing
    } else {
      result.push(value);
    }
  }
  return result;
}


export default (nums, target) => {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const vi = nums[i];
        const vj = nums[j];
        const vk = nums[k];
        const rest = target - vi - vj - vk;
        const restArr = nums.slice(k + 1);
        const vl = restArr.find(item => item === rest);
        if (vl !== undefined) {
          ans.push([vi, vj, vk, vl]);
        }
      }
    }
  }
  return uniq(ans, Array.isEqual);
};

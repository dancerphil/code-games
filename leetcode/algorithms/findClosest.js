export default (arr, target) => {
  if (arr.length === 0) {
    return undefined;
  }
  let left = 0;
  let right = arr.length;
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);
    const value = arr[mid];
    if (value === target) {
      return [mid];
    }
    if (value < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  const leftValue = arr[left];
  const rightValue = arr[right];
  if (!rightValue) {
    return [left];
  }
  if (target - leftValue === rightValue - target) {
    return [left, right];
  }
  if (target - leftValue < rightValue - target) {
    return [left];
  }
  return [right];
}

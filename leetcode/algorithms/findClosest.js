import './sortedFindIndex';

export default (arr, target) => {
  const index = arr.sortedFindIndex(target);
  if (index === undefined) {
    return undefined;
  }

  const leftValue = arr[index];
  const rightValue = arr[index + 1];
  if (!rightValue) {
    return [index];
  }
  if (target - leftValue === rightValue - target) {
    return [index, index + 1];
  }
  if (target - leftValue < rightValue - target) {
    return [index];
  }
  return [index + 1];
};

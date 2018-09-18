export default function (matrix) {
  let top = 0;
  let right = matrix[0] ? matrix[0].length - 1 : 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let loop = 0;
  const arr = [];
  while (top <= bottom && left <= right) {
    switch (loop) {
      case 0: {
        for (let i = left; i <= right; i++) {
          arr.push(matrix[top][i]);
        }
        top++;
        break;
      }
      case 1: {
        for (let i = top; i <= bottom; i++) {
          arr.push(matrix[i][right]);
        }
        right--;
        break;
      }
      case 2: {
        for (let i = right; i >= left; i--) {
          arr.push(matrix[bottom][i]);
        }
        bottom--;
        break;
      }
      case 3: {
        for (let i = bottom; i >= top; i--) {
          arr.push(matrix[i][left]);
        }
        left++;
        break;
      }
      default:
    }
    loop = (loop + 1) % 4;
  }
  return arr;
}

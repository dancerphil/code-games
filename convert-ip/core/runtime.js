const spaceType = 0x100;
const dotType = 0x010;
const digitType = 0x001;

let charStack;
let numberStack;
let preType;
let waitType;

const init = () => {
  charStack = [];
  numberStack = [];
  preType = dotType;
  waitType = 0x111;
}

init();

const convertNumber = () => {
  numberStack.push(Number(charStack.join('')));
  charStack = [];
}

const getType = (node) => {
  if(node === ' ') {
    return spaceType;
  }
  if(node === '.') {
    return dotType;
  }
  if(!Number.isNaN(node)) {
    return digitType;
  }
  throw Error(`Invalid char: ${node}`)
}

export const dealWith = node => {
  const type = getType(node);
  if((type & waitType) === 0){
    throw Error(`Invalid char type of: ${node}`);
  }
  switch (type) {
    case digitType:
      waitType = 0x111; // space && dot && digit
      charStack.push(node);
      preType = type;
      return;
    case dotType:
      waitType = 0x111; // space && dot && digit
      convertNumber();
      preType = type;
      return;
    case spaceType:
      if(preType === digitType) {
        waitType = 0x110; // space && dot
      } else {
        waitType = 0x111; // space && dot && digit
      }
      return;
    default:
      return;
  }
}

export const toString = () => {
  convertNumber();
  const ans =  numberStack[0] * 16777216 + numberStack[1] * 65536 + numberStack[2] * 256 + numberStack[3];
  init();
  return ans;
}

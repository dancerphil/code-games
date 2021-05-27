module.exports = {
  "extends": "airbnb-base",
  "plugins": ["jest"],
  "env": {
    "jest/globals": true
  },
  "rules": {
    "max-len": "off", // no force newline
    "no-bitwise": "off", // using bitwise
    "no-continue": "off", // using continue
    "no-extend-native": "off", // polyfill
    "no-mixed-operators": "off", // + - * / **
    "no-nested-ternary": "off", // using nested-ternary
    "no-plusplus": "off", // using i++
    "object-curly-newline": "off", // no force newline
    "object-property-newline": "off", // no force newline

    /* anti */
    "no-param-reassign": "off"
  }
};

module.exports = {
  "extends": "airbnb-base",
  "plugins": ["jest"],
  "env": {
    "jest/globals": true
  },
  "rules": {
    "max-len": "off", // no force newline
    "no-bitwise": "off",
    "no-continue": "off",
    "no-extend-native": "off", // polyfill
    "no-plusplus": "off",
    "object-curly-newline": "off", // no force newline
    "object-property-newline": "off", // no force newline

    /* anti */
    "no-param-reassign": "off"
  }
};

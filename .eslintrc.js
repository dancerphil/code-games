require('@reskript/config-lint/patch');

module.exports = {
  extends: require.resolve('@reskript/config-lint/config/eslint'),
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // close some rules
    'camelcase': 'off',
    'max-len': 'off',
    'max-statements': 'off',
    'no-negated-condition': 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/init-declarations': 'off',
    // open some rules
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
//
// module.exports = {
//   "extends": "airbnb-base",
//   "plugins": ["jest"],
//   "env": {
//     "jest/globals": true
//   },
//   "rules": {
//     "max-len": "off", // no force newline
//     "no-bitwise": "off", // using bitwise
//     "no-continue": "off", // using continue
//     "no-extend-native": "off", // polyfill
//     "no-mixed-operators": "off", // + - * / **
//     "no-nested-ternary": "off", // using nested-ternary
//     "no-plusplus": "off", // using i++
//     "object-curly-newline": "off", // no force newline
//     "object-property-newline": "off", // no force newline
//
//     /* anti */
//     "no-param-reassign": "off"
//   }
// };

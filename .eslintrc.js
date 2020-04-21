module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',// process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': 'off'//process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};

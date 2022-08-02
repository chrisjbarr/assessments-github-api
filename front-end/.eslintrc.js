module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier', './.eslintrc-auto-import.json'],
  env: {
    'vue/setup-compiler-macros': true,
    node: true
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
};

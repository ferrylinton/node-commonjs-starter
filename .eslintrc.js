module.exports = {
 env: {
  commonjs: true,
  node: true,
  es6: true,
  jest: true,
 },
 extends: ['plugin:prettier/recommended', 'prettier', 'eslint:recommended'],
 overrides: [
  {
   files: ['.eslintrc.{js,cjs}', '**/*.test.js'],
   parserOptions: {
    sourceType: 'script',
   },
   plugins: ['jest'],
  },
 ],
 parserOptions: {
  ecmaVersion: 'latest',
 },
 rules: {
  'no-var': 'error',
  semi: 'error',
  'no-multi-spaces': 'error',
  'space-in-parens': 'error',
  'no-multiple-empty-lines': 'error',
  'prefer-const': 'error',
 },
};

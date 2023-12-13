module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-depth': ['error', 3],
    'max-params': ['error', 3],
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'no-new': 'off',
    'max-lines-per-function': ['error', { max: 15 }],
  },
  extends: ['airbnb-base', 'prettier'],
};

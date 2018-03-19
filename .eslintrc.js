module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
   "ecmaVersion": 6
  },
  extends: [
    'eslint:recommended'
  ],
  env: {
    "browser": true,
    "node": true
  },
  plugins: [
    'ember',
    // "prettier"
  ],
  rules: {
    'no-console': 'off',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'func-style': ['error', 'expression'],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': ['error', 'always'],
    //
    'bare-strings': true,
    "comma-dangle": ["error", "never"],
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }], // disallow declaration of variables that are not used in the code
    // "prettier/prettier": ["error", { useTabs: false,  tabWidth: 2, printWidth: 120, bracketSpacing: true }],

  }
};

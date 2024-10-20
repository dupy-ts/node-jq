const Path = require('path')
module.exports = {
  env: {
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/strict','plugin:@typescript-eslint/stylistic-type-checked'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: [Path.join(__dirname,'./tsconfig.json')],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
"@typescript-eslint/no-unused-vars": "off",
"@typescript-eslint/no-invalid-void-type": "off",
"@typescript-eslint/prefer-literal-enum-member": "off",
"@typescript-eslint/no-dynamic-delete": "off",
  }
}

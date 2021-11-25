module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  root: true,
  rules: {
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['dynamicImport', 'modules'] }],
  }
}

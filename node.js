module.exports = {
  extends: './base.js',
  plugins: [
    'prefer-let',
    'node'
  ],
  rules: {
    'node/no-unsupported-features/node-builtins': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',

    'prefer-let/prefer-let': 'error',

    'template-curly-spacing': ['error', 'always'],
    'require-atomic-updates': 'error',
    'prefer-arrow-callback': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'prefer-rest-params': 'error',
    'constructor-super': 'error',
    'object-shorthand': 'error',
    'no-new-symbol': 'error',
    'require-yield': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-var': 'error'
  },
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'script'
  }
}

let globals = require('globals')

let jest = { }
for (let i in globals.jest) {
  if (i !== 'test' && i !== 'xtest') jest[i] = globals.jest[i]
}

module.exports = {
  extends: 'standard',
  plugins: [
    'jest',
    'security',
    'node',
    'import-helpers'
  ],
  rules: {
    'standard/no-callback-literal': 'off',

    'security/detect-possible-timing-attacks': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-new-buffer': 'error',

    'node/no-unpublished-require': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',

    'import-helpers/order-imports': ['error', {
      'groups': [
        ['builtin', 'external', 'internal'],
        ['parent', 'sibling', 'index']
      ],
      'newlines-between': 'always'
    }],

    'nonblock-statement-body-position': 'error',
    'no-misleading-character-class': 'error',
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'block-scoped-var': 'error',
    'no-invalid-this': 'error',
    'global-require': 'error',
    'no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all'
    }],
    'getter-return': 'error',
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'valid-jsdoc': 'error',
    'func-style': ['error', 'declaration'],
    'no-shadow': 'error',
    'max-len': ['error', 80],
    'no-new': 'off'
  },
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['test/*', 'test/**/*'],
      rules: {
        'node/no-unpublished-require': 'off',
        'node/no-missing-require': ['error', {
          allowModules: ['worker_threads']
        }]
      },
      globals: jest
    },
    {
      files: ['*.test.js'],
      rules: {
        'jest/valid-expect-in-promise': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/no-identical-title': 'error',
        'jest/consistent-test-it': ['error', { fn: 'it' }],
        'jest/no-disabled-tests': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-empty-title': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/valid-expect': 'error'
      },
      globals: jest
    }
  ]
}

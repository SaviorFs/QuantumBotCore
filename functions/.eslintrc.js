module.exports = {
    env: {
      es6: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
      // Disable specific rules or set their severity to "off"
      'max-len': 'off',
      'quote-props': 'off',
      'object-curly-spacing': 'off',
      indent: 'off',
    },
    overrides: [
      {
        files: ['**/*.spec.*'],
        env: {
          mocha: true,
        },
        rules: {},
      },
    ],
    globals: {},
  };
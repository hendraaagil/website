module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'next', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-plusplus': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-page-custom-font': 'off',
  },
};

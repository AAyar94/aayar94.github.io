module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['build', 'dist', 'node_modules'],
  rules: {
    'prefer-template': 0,
    'react/no-children-prop': 0,
    'linebreak-style': 0,
    // Not a build error under Vite; kept as a warning so it never blocks dev.
    'react/destructuring-assignment': 'warn',
    // React 18 + new JSX transform / Vite does not require React in scope,
    // but the components import it explicitly, so leave the import rules alone.
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  overrides: [
    {
      files: ['vite.config.js', '*.cjs', '**/*.test.{js,jsx}', 'src/setupTests.js'],
      env: {
        node: true,
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};

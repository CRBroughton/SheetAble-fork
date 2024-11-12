import antfu from '@antfu/eslint-config';

export default await antfu({
  react: true,
  stylistic: {
    semi: true,
  },
  ignores: ['dist', '**/dist/**', 'public', '**/public/**', 'coverage', '**/coverage/**', 'node_modules', '**/node_modules/**', 'tsconfig.app.json', 'tsconfig.json', 'tsconfig.node.json'],
  rules: {
    'no-console': 'error',
  },
});

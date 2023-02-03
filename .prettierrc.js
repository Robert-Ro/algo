module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  arrowParens: 'always',
  printWidth: 100,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
}

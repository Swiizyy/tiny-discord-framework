/**
 * @type {import("prettier").Config}
 */
const prettierConfig= {
  endOfLine: 'lf',
  printWidth: 150,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'none',
  useTabs: true,
  overrides: [
    {
      files: '*.yml',
      options: {
        tabWidth: 2,
        useTabs: false
      }
    }
  ]
};

export default prettierConfig;
const colors = {
  'primary-color': '#35a7ee',
  'secondary-color': '#1b305a',
  'text-color': '#000000',
  'error-text-color': '#ff4d00',
  'text-color-light': '#999999',
};

module.exports = {
  plugins: [
    ['postcss-preset-env', {}],
    ['postcss-nested', { preserveEmpty: true }],
    ['autoprefixer', { grid: true }],
    [
      'postcss-simple-vars',
      {
        variables: () => colors,
      },
    ],
  ],
};

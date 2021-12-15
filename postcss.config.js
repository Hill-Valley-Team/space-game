const colors = {
  'primary-color': '#35a7ee',
  'secondary-color': '#1b305a',
  'text-color': '#000000',
  'error-text-color': '#ff4d00',
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

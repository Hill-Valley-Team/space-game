const colors = {
  'primary-color': '#35a7ee',
  'secondary-color': '#1b305a',
  'text-color': '#000000',
  'error-text-color': '#ff4d00',
  'text-color-light': '#999999',
  'primary-bg-color': 'rgb(255 255 255 / 90%)',
  'secondary-btn-bg-color': 'rgb(255 255 255 / 40%)',
  'disabled-bg-color': '#999999',
  'accent-color': '#ffc701',
  'pure-white': '#ffffff',
  'error-text-color': '#FF4D00',
  'error-text-color-light': '#fff501',
  'light-blue': '#daecf8',
  'purple': '#5d32bb',
  'orange': '#ff8652',
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

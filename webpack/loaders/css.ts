const cssRegex = /\.css$/i;

export default {
  client: {
    test: cssRegex,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  ssr: {
    test: cssRegex,
    loader: 'null-loader',
  },
};

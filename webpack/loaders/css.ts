import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const cssRegex = /\.css$/i;

export default {
  client: {
    test: cssRegex,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  },
  ssr: {
    test: cssRegex,
    loader: 'null-loader',
  },
};

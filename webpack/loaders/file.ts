const fileRegex = /\.(woff(2)?|eot|ttf|otf|svg|)$/;

export default {
  client: {
    test: fileRegex,
    type: 'asset/inline',
  },
  ssr: {
    test: fileRegex,
    loader: 'null-loader',
  },
};

const tsRegexp = /\.ts(x?)$/;

const loaderConfig = {
  test: tsRegexp,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  ],
};

export default {
  client: { ...loaderConfig },
  ssr: { ...loaderConfig },
};

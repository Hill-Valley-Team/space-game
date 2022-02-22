const imgRegexp = /\.(?:ico|gif|png|jpg|jpeg)$/i;

const loaderConfig = {
  test: imgRegexp,
  type: 'asset/resource',
};

export default {
  client: {
    ...loaderConfig,
  },
  ssr: {
    ...loaderConfig,
  },
};

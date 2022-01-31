const imgRegexp = /\.(?:ico|gif|png|jpg|jpeg)$/i;

export default {
  client: {
    test: imgRegexp,
    type: 'asset/resource',
  },
  ssr: {
    test: imgRegexp,
    loader: 'null-loader',
  },
};

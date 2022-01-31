import React from 'react';
import { hydrate } from 'react-dom';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { App } from '../../src/components/App';

type Props = {
  data: {}; // TODO: Your types from server
};

const Bundle = (props: Props) => (
  <>
    <Helmet>
      <html lang="en" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Helmet>

    <App {...props.data} />
  </>
);

export const DesktopBundle = hot(Bundle);

export default (data: {}) => {
  hydrate(<DesktopBundle data={data} />, document.getElementById('root'));
};

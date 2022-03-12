import React from 'react';
import Helmet from 'react-helmet';

import { OG } from './consts';
import { MetaProps } from './types';

export const Meta = ({
  description = OG.description,
  title = OG.title,
  image = OG.image,
}: MetaProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="Space Racing Game" />
    <meta name="title" content={title} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
  </Helmet>
);

export default Meta;

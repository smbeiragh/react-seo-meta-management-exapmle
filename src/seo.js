/**
 * Created by sajjad on 3/26/18.
 */
import React from 'react';
import Helmet from 'react-helmet';

const map = {
  '/': (props) =>
    (<Helmet>
      <title>SEO Meta Tags Management</title>
      <meta name="description" content="A Clean SEO Meta Tag Management Idea for React" />
    </Helmet>),
  '/about': (props) =>
    (<Helmet>
      <title>SEO Meta Tags Management - About</title>
      <meta name="description" content="An example off a clean solution to SEO meta tags management in React" />
    </Helmet>),
  '/posts/:slug': (props) =>
    (<Helmet>
      <title>SEO Meta Tags Management - {props.match.params.slug}</title>
      <meta name="description" content={`A Post about ${props.match.params.slug}`} />
    </Helmet>)
};

export const SeoMetaGenerator = (props) => {
  const { match } = props;
  return map[match.path](props);
};

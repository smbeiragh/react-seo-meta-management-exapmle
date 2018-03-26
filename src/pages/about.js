/**
 * Created by sajjad on 3/26/18.
 */
import React from 'react';
import { Nav } from './../nav';
import { SeoMetaGenerator } from './../seo';

export const About = (props) => {
  return (
    <div>
      <SeoMetaGenerator {...props} />
      <Nav />
      <p>An example off a clean solution to SEO meta tags management in React</p>
    </div>
  );
};

/**
 * Created by sajjad on 3/26/18.
 */
import React from 'react';
import { Nav } from './../nav';
import { SeoMetaGenerator } from './../seo';

export const Home = (props) => {
  return (
    <div>
      <SeoMetaGenerator {...props} />
      <Nav />
      <p>A Clean SEO Meta Tag Management Idea for React</p>
    </div>
  );
};

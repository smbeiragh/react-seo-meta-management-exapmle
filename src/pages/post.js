/**
 * Created by sajjad on 3/26/18.
 */
import React from 'react';
import { Nav } from './../nav';
import { SeoMetaGenerator } from './../seo';

export const Post = (props) => {
  const { match } = props;
  return (
    <div>
      <SeoMetaGenerator {...props} />
      <Nav />
      <p>Post content of {match.params.slug}</p> 
    </div>
  );
};

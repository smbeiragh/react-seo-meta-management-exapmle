/**
 * Created by sajjad on 3/26/18.
 */
import React from 'react';

export const NotFound = (props) => {
  const { staticContext } = props;
  if (staticContext) {
    staticContext.status = 404;
  }
  return (
    <div> Not Found </div>
  );
};


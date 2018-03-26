/**
 * Created by sajjad on 3/26/18.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = (props) =>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/posts/cool-post">Cool Post</Link>
    </li>
    <li>
      <Link to="/posts/another-cool-post">Another Cool Post</Link>
    </li>
  </ul>;

/**
 * Created by sajjad on 3/14/18.
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Post } from './pages/post';
import { NotFound } from './pages/not_found';

export default function(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/posts/:slug" component={Post}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

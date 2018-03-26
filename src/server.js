import path from 'path';
import { Server } from 'http';
import Express from 'express';
import 'babel-polyfill';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import React from 'react';
import { StaticRouter } from 'react-router'
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import webpackConfig from './../webpack.config.js';
import App from './app';

const compiler = webpack(webpackConfig);

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// webpack dev server as middleware
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

// server static assets in dev mode
app.use(Express.static(path.join(__dirname, '..', 'public')));

app.get('*', (request, response, next) => {
  const context = {};

  const markup = ReactDOMServer.renderToString(
    <StaticRouter
      location={request.url}
      context={context}
    >
      <App />
    </StaticRouter>
  );

  if (context.url) {
    response.writeHead(301, {
      Location: context.url
    });
    response.end();
  } else {
    const helmet = Helmet.renderStatic();
    response.status(context.status || 200);
    response.render('index', {markup, helmet});
  }
});

// start the server
const port = 3000;
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});

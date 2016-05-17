import express from 'express';
import RenderComponent from '../lib/RenderComponent'
import React, { Component } from 'react';
import ReactDomServer from 'react-dom/server';
import HomepageComponent from '../components/HomepageComponent';
const router = express.Router();

class Main extends Component {
  render() {
    return (
      <html>
        <head></head>
        {new RenderComponent("body", HomepageComponent, {})}
      </html>
    );
  }
}

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send(ReactDomServer.renderToString(<Main />));
});

export default router;

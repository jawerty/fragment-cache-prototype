import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import HomepageComponent from '../components/HomepageComponent';
const router = express.Router();

function htmlWrap(html) {
  return `
    <!doctype html>
    <html>
      <head></head>
      <body>${html}</body>
    </html>
  `;
}

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send(htmlWrap(ReactDomServer.renderToString(<HomepageComponent/>)));
});

export default router;

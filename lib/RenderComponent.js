import React from 'react';
import ReactDomServer from 'react-dom/server';
const cache = new Map()
// import RawHtml from "react-raw-html"

class RenderComponent {
  constructor(tagName, Component, props, pleaseCache = true) {

  	const cached = cache.get(JSON.stringify(props));
  	let html;

  	if (cached) {
  		html = cached;
  	} else {
  		html = ReactDomServer.renderToString(<Component {...props} />);
  		if (pleaseCache) cache.set(JSON.stringify(props), html);
  	}

  	const markup = {__html: html};
  	return <tagName dangerouslySetInnerHTML={markup} />;
  }
}

export default RenderComponent

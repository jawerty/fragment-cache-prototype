import React, { Component } from 'react';
import hash from 'object-hash';

export default class Image extends Component {
  static cache = new Map()

  static getCached(props) {
    return Image.cache.get(hash(props)) || null
  }

  static setCached(props, jsx) {
    Image.cache.set(hash(props), jsx)
  }

  render() {
    const cached = Image.getCached(this.props);
    if (cached) {
      return cached
    }
    const jsx = (
      <article>
        <img src={this.props.src} />
        <p>{this.props.desc}</p>
      </article>
    )
    Image.setCached(this.props, jsx)
    return jsx
  }
}

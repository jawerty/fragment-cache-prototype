import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    return (
      <article>
        <img src={this.props.src} />
        <p>{this.props.desc}</p>
      </article>
    )
  }
}

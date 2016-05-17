import RenderComponent from '../lib/RenderComponent'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './ImageComponent';
import cats from '../data/cats';

class HomepageComponent extends Component {
  render() {
    const jsx = (
      <section>
        <h1>Hello World</h1>
        {cats.map(({image, description}) => new RenderComponent("div", Image, {src: image, desc: description}))}
      </section>
    );

    return jsx
  }
}

export default HomepageComponent

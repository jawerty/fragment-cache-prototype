import BigComponent from '../lib/big-component'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './ImageComponent';
import cats from '../data/cats';

BigComponent()
class HomepageComponent extends BigComponent {
  view() {
    const jsx = (
      <section>
        <h1>Hello World</h1>
        {cats.map(({image, description}) => <Image src={image} desc={description} />)}
      </section>
    );

    return jsx
  }
}

export default HomepageComponent

import React, { Component } from 'react';
import Image from './ImageComponent';
import cats from '../data/cats';

class HomepageComponent extends Component {

  render() {
    return (
      <section>
        <h1>Hello World</h1>
        {cats.map(({image, description}) => <Image src={image} desc={description} />)}
      </section>
    );
  }
}

export default HomepageComponent

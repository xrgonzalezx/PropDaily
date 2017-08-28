import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'


class BaseLayout extends Component {
  render() {
    return (
      <Header />

{this.props.children}

      <Footer />
    );
  }
}

export default BaseLayout;

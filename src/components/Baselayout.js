import React, { Component } from 'react';

function BaseLayout(props) {
  return (
    <div className="base">
      <nav className="navbar">
        <h3>I am the Navigation Bar</h3>
      </nav>

      {props.children}

      <footer className="footer">
        <h3>I am the Footer</h3>
      </footer>
    </div>
  );
}

export default BaseLayout;

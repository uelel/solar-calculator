import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <h1 className="header">Přehled roční spotřeby a výroby elektřiny s fotovoltaikou</h1>
      </div>
    );
  }
}

export default Header;

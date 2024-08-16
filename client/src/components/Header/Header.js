import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

  render() {
    return (
      <div className="w-full h-24 inline-flex justify-start items-center p-5 bg-light">
        <h1>Přehled roční spotřeby a výroby elektřiny s fotovoltaikou</h1>
      </div>
    );
  }
}

export default Header;

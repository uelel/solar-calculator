import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full h-24 inline-flex justify-start items-center p-5 bg-light">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;

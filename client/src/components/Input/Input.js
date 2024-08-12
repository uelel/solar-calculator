import React from 'react';
// Styles
import './Input.css';

class Input extends React.Component {
  render() {
    const { label, name, ... } = this.props;
    return (
      <div className="input-section" data-name="name">
        <h3>{label}</h3>
        {this.props.children}
      </div>
    );
  }
}

Input.Kraj = class extends React.Component {
  render() {
    const { ..., data } = this.props;
    return (
      <div className="input-text">
        <label>{label}</label>
        <input type="text" {...props} />
      </div>
    );
  }
};


export default Input;

import React from 'react';
import { Select, Option } from "@material-tailwind/react";
// Styles
import './InputSection.css';

class InputSection extends React.Component {
  render() {
    const { name, label, children, ...rest } = this.props;
    return (
      <div className="input-section" data-name={name}>
        <h3>{label}</h3>
        {children}
      </div>
    );
  }
}

InputSection.Kraj = class extends React.Component {
  render() {
    const { data, ...props } = this.props;
    return (
      <div className="input-content">
        <Select>
         {data.map((option) => (
           <Option key={option.value} value={option.value}>
             {option.label}
           </Option>
         ))}
        </Select>
      </div>
    );
  }
};

export default InputSection;
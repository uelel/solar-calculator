import React from 'react';
import { Select, Option } from "@material-tailwind/react";

class InputSection extends React.Component {
  render() {
    const { name, label, children, ...rest } = this.props;
    return (
      <div className="w-full flex flex-col justify-center items-start flex-nowrap px-6 py-8 bg-white border-light border-x-8 border-b-2" data-name={name}>
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
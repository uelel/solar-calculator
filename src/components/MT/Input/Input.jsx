import React from "react";

class Input extends React.Component {
  render() {
    const { name, type, label, value, checked, onChange } = this.props;
    const id = `${name}-${value}`;
    return (
      <input
        name={name}
        type={type} 
        value={value} 
        onChange={onChange} 
        className="w-full h-14 px-4 py-2 inline-flex justify-start items-center 
                   border-2 border-light bg-white shadow-sm focus:outline-none 
                   focus:border-dark hover:border-dark transition-colors
                   text-lg text-dark font-medium rounded-md normal-case text-nowrap
                   appearance-none cursor-pointer"
      >
        {label}
      </input>
    );
  }
}

export default Input;
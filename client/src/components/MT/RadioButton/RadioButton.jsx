import React from "react";
import { Radio } from "@material-tailwind/react";

class RadioButton extends React.Component {
  render() {
    const { name, label, value, checked, onChange } = this.props;
    const id = `${name}-${value}`;
    return (
      <label
        htmlFor={id}
        className={`w-max h-16 inline-flex justify-center items-center px-6 py-2 
                    shadow-md shadow-gray-900/10 
                    text-lg font-normal rounded-md normal-case text-nowrap 
        					  hover:bg-dark hover:text-white transition-colors cursor-pointer
                    ${checked ? "bg-dark text-white" : "bg-light text-dark"}`}
      >
        <input
          type="radio" 
          id={id} 
          name={name} 
          value={value} 
          checked={checked} 
          data-selected={checked ? "true" : "false"} 
          onChange={onChange} 
          className="hidden"
        />
        {label}
      </label>
    );
  }
}

export default RadioButton;
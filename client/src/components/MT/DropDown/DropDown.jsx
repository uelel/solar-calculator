import React from "react";
import { Select, Option } from "@material-tailwind/react";

class DropDown extends React.Component {
  render() {
    const { name, defaultValue, data, onChange } = this.props;
    return (
      <Select 
        name={name} 
        value={defaultValue} 
        variant="outlined" 
        size="lg"
        lockScroll={true} 
        className="text-lg font-medium border-dark" 
        onChange={onChange}
      >
      {data.map((option) => (
        <Option
          key={option.value} 
          value={option.value} 
          className="text-lg font-medium focus:bg-light"
        >
          {option.label}
        </Option>
      ))}
      </Select>
    );
  }
}

export default DropDown;
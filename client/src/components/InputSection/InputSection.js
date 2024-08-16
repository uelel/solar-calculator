import React from 'react';
import { useState } from 'react';
import { Input, Select, Option, Button } from "@material-tailwind/react";

class InputSection extends React.Component {
  render() {
    const { label, children, ...rest } = this.props;
    return (
      <div className="w-full flex flex-col justify-center items-start flex-nowrap px-6 py-8 bg-white border-light border-x-8 border-b-2">
        <h3>{label}</h3>
        {children}
      </div>
    );
  }
}

InputSection.Kraj = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
  }

  render() {
    return (
      <div className="w-full z-10">
        <Select 
          name={this.props.name} 
          value={this.state.value} 
          variant="outlined" 
          size="lg"
          lockScroll={true} 
          className="text-lg font-medium border-dark" 
          menuProps={{}} 
          onChange={(val) => this.setState({ value: val })}
        >
         {this.props.data.map((option) => (
           <Option key={option.value} value={option.value} className="text-lg font-medium focus:bg-light">
             {option.label}
           </Option>
         ))}
        </Select>
      </div>
    );
  }
};

InputSection.Spotreba = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
      unit: this.props.defaultUnit
    };
  }

  render() {
    return (
      <div className="w-full flex flex-row justify-center items-start flex-nowrap gap-x-3">
        <div className="w-8/12">
          <Input
            name={this.state.name} 
            value={this.state.value} 
            size="lg" 
            variant="outlined" 
            type="number" 
            className="!text-lg !font-medium !text-dark border border-dark focus:border-2 active:border-2 outline-none" 
            onChange={(val) => this.setState({ value: val.value })}
          />
        </div>
        <div className="w-4/12 z-9">
          <Select 
            name="spotreba-jednotka" 
            value={this.state.unit} 
            size="lg" 
            variant="outlined" 
            lockScroll={true}  
            className="text-lg font-medium text-dark border border-dark focus:border-2 active:border-2 outline-none" 
            onChange={(val) => this.setState({ unit: val })}
          >
            <Option value="kwh" className="text-lg font-medium focus:bg-light">kWh</Option>
            <Option value="mwh" className="text-lg font-medium focus:bg-light">MWh</Option>
          </Select>
        </div>
      </div>
    );
  }
};

InputSection.VykonFVE = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
  }

  render() {
    return (
      <div className="w-full flex flex-row justify-start items-start flex-wrap gap-3">
        {this.props.data.map((option) => (
          <Button
            value={option.value} 
            variant="filled" 
            size="lg" 
            className="h-16 text-lg font-normal text-dark rounded-md normal-case bg-light hover:bg-dark hover:text-white" 
          >
            {option.label}
          </Button>
        ))}
      </div>
    );
  }
};

InputSection.TypFVE = class extends React.Component {
  render() {
    const { name, ...props } = this.props;
    return (
      <div className="w-full flex flex-row justify-start items-start flex-wrap gap-3">
        <Button
          value="bez_baterie" 
          variant="filled" 
          size="lg" 
          className="h-16 text-lg font-normal text-dark rounded-md normal-case bg-light hover:bg-dark hover:text-white" 
        >
          Bez baterie
        </Button>
        <Button
          value="s_baterii" 
          variant="filled" 
          size="lg" 
          className="h-16 text-lg font-normal text-dark rounded-md normal-case bg-light hover:bg-dark hover:text-white" 
        >
          S baterií
        </Button>
      </div>
    );
  }
};

InputSection.BaterieKapacita = class extends React.Component {
  render() {
    const { name, data, ...props } = this.props;
    return (
      <div className="w-full flex flex-row justify-start items-start flex-wrap gap-3">
        {data.map((option) => (
          <Button
            value={option.value} 
            variant="filled" 
            size="lg" 
            className="h-16 text-lg font-normal text-dark rounded-md normal-case bg-light hover:bg-dark hover:text-white" 
          >
            {option.label}
          </Button>
        ))}
      </div>
    );
  }
};

export default InputSection;
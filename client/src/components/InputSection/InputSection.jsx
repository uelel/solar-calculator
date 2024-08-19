import React from 'react';
import { useState } from 'react';
import { Input } from "@material-tailwind/react";
import RadioButton from "../MT/RadioButton";
import DropDown from "../MT/DropDown";

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
      value: String(this.props.defaultValue)
    };
  }

  changeState = (e) => {
    this.setState({
      value: String(e)
    });
  }

  render() {
    return (
      <div className="w-full z-10">
        <DropDown 
          name={this.props.name} 
          defaultValue={this.state.value} 
          data={this.props.data} 
          onChange={this.changeState}
        />
      </div>
    );
  }
};

InputSection.Spotreba = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: String(this.props.defaultValue),
      unit: String(this.props.defaultUnit)
    };
  }

  changeValue = (e) => {
    this.setState({
      value: String(e.target.value)
    });
  }
  
  changeUnit = (e) => {
    this.setState({
      unit: String(e)
    });
  }

  render() {
    return (
      <div className="w-full flex flex-row justify-center items-start flex-nowrap gap-x-3">
        <div className="w-8/12">
          <Input
            name={this.props.name} 
            value={this.state.value} 
            size="lg" 
            variant="outlined" 
            type="number" 
            className="!text-lg !font-medium !text-dark border border-dark focus:border-2 active:border-2 outline-none" 
            onChange={this.changeValue}
          />
        </div>
        <div className="w-4/12 z-9">
          <DropDown 
            name="spotreba-jednotka" 
            defaultValue={this.state.unit} 
            data={this.props.data} 
            onChange={this.changeUnit}
          />
        </div>
      </div>
    );
  }
};

InputSection.VykonFVE = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Number(this.props.defaultValue)
    };
  }

  changeState = (e) => {
    this.setState({
      value: Number(e.target.value)
    });
  }

  render() {
    return (
      <div className="w-full flex flex-row justify-start items-start flex-wrap gap-3">
        {this.props.data.map((option) => (
          <RadioButton 
            key={option.value} 
            name="vykon_fve" 
            value={option.value} 
            label={option.label} 
            checked={option.value === this.state.value} 
            onChange={this.changeState}
          />
        ))}
      </div>
    );
  }
};

InputSection.TypFVE = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: String(this.props.defaultValue)
    };
  }

  changeState = (e) => {
    this.setState({
      value: String(e.target.value)
    });
  }

  render() {
    return (
      <div className="w-full flex flex-row justify-start items-start flex-wrap gap-3">
        <RadioButton 
          key="bez_baterie" 
          name="typ_fve" 
          value="bez_baterie" 
          label="Bez baterie" 
          checked={"bez_baterie" === this.state.value} 
          onChange={this.changeState}
        />
        <RadioButton 
          key="s_baterii" 
          name="typ_fve" 
          value="s_baterii" 
          label="S baterií" 
          checked={"s_baterii" === this.state.value} 
          onChange={this.changeState}
        />
      </div>
    );
  }
};

InputSection.BaterieKapacita = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Number(this.props.defaultValue)
    };
  }

  changeState = (e) => {
    this.setState({
      value: Number(e.target.value)
    });
  }

  render() {
    const { name, data, ...props } = this.props;
    return (
      <div className="w-full flex flex-row justify-start items-start flex-wrap gap-3">
        {data.map((option) => (
          <RadioButton 
            key={option.value} 
            name="baterie_kapacita" 
            value={option.value} 
            label={option.label} 
            checked={option.value === this.state.value} 
            onChange={this.changeState}
          />
        ))}
      </div>
    );
  }
};

export default InputSection;
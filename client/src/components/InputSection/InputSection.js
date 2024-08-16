import React from 'react';
import { Input, Select, Option, Button } from "@material-tailwind/react";

class InputSection extends React.Component {
  render() {
    const { name, label, children, ...rest } = this.props;
    return (
      <div className="w-full flex flex-col justify-center items-start flex-nowrap px-6 py-8 bg-white border-light border-x-8 border-b-2">
        <h3>{label}</h3>
        {children}
      </div>
    );
  }
}

InputSection.Kraj = class extends React.Component {
  render() {
    const { name, data, ...props } = this.props;
    return (
      <div className="w-full h-20">
        <Select 
          name={name}
          size="lg" 
          variant="outlined" 
          label="Vyberte kraj" 
          color="indigo" 
          lockScroll="true" 
          className="h-16 inline-flex" 
          labelProps={{ className: "h-16 top-0" }} 
          //onChange={(val) => this.setValue(val)}
        >
         {data.map((option) => (
           <Option value={option.value} className="text-lg font-medium">
             {option.label}
           </Option>
         ))}
        </Select>
      </div>
    );
  }
};

InputSection.Spotreba = class extends React.Component {
  render() {
    const { name, ...props } = this.props;
    return (
      <div className="w-full flex flex-row justify-center items-start flex-nowrap gap-x-3">
        <div className="w-8/12">
          <Input
            name={name}
            size="lg" 
            variant="outlined" 
            color="indigo" 
            type="number" 
          />
        </div>
        <div className="w-4/12">
          <Select 
            name="spotreba-jednotka"
            size="lg" 
            variant="outlined" 
            color="indigo" 
            lockScroll="true" 
            className="" 
            labelProps={{}} 
            //onChange={(val) => this.setValue(val)}
          >
            <Option value="kwh" className="text-lg font-medium">kWh</Option>
            <Option value="mwh" className="text-lg font-medium">MWh</Option>
          </Select>
        </div>
      </div>
    );
  }
};

InputSection.VykonFVE = class extends React.Component {
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
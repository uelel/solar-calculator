import React from 'react';

class Kalkulace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full flex flex-col justify-center items-center flex-nowrap px-6 py-8 mt-8 bg-white border-light border-x-8 border-b-2">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

Kalkulace.Row = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full h-16 flex flex-row justify-between items-center flex-nowrap border-b-2 border-light">
        <div className="text-dark">
        	{this.props.label}
        </div>
        <div className="text-lg font-medium text-dark">
         {this.props.value} {this.props.unit}</div>
      </div>
    );
  }
};

export default Kalkulace;
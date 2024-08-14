import React from 'react';

import { kraje } from '../../data';

import './App.css';
// Components
import Header from '../Header';
import InputSection from '../InputSection';

class App extends React.Component {

  state = {
    currentStep: 0,
    config: null
  };

  get totalPrice() {
    // calculate total price
    return 0;
  };

  get totalSubsidy() {
    // calculate total subsidy
    return 0;
  };

  get totalSubsidy() {
    // calculate total subsidy
    return 0;
  };

  get finalCost() {
    // calculate final cost
    return 0;
  };

  get annualElectricitySavings() {
    // calculate annual electricity savings
    return 0;
  };

  get ROI() {
    // calculate return on investment
    return 0;
  };

  render() {
    return (
      <div className="app">
        <Header/>
        <InputSection label="V jakém kraji žijete?" name="kraj" data={kraje} />
      </div>
    );
  };
};

export default App;
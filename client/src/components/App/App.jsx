import React from 'react';

import { kraje, spotreba_jednotky, vykon_fve, baterie_kapacita } from '../../data';

// Components
import Header from '../Header';
import InputSection from '../InputSection';

class App extends React.Component {

  state = {
    VykonFVEShown: false,
    currentStep: 0,
    config: null
  };

  showVykonFVE = () => {
    this.setState({ VykonFVEShown: !this.state.VykonFVEShown });
  }

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
      <div className="w-full flex flex-col items-center overflow-x-hidden text-center">
        <Header/>
        <InputSection label="V jakém kraji žijete?">
          <InputSection.Kraj
            name="kraj"
            data={kraje}
            defaultValue={kraje[0]['value']}
          />
        </InputSection>
        <InputSection label="Jaká je vaše spotřeba elektřiny?">
          <InputSection.Spotreba
            name="spotreba"
            defaultValue="10000"
            data={spotreba_jednotky}
            defaultUnit={spotreba_jednotky[0]['value']}
          />
        </InputSection>
        <InputSection label="Jaký je předpokládaný výkon FVE?">
          <InputSection.VykonFVE
            name="vykon_fve"
            data={vykon_fve}
            defaultValue={vykon_fve[3]['value']}
          />
        </InputSection>
        <InputSection label="Jaký typ FVE plánujete pořídit?">
          <InputSection.TypFVE
            name="typ_fve"
            defaultValue="bez_baterie"
            onChange={this.showVykonFVE}
          />
        </InputSection>
        {this.state.VykonFVEShown === true && (
          <InputSection label="Jaká je plánovaná kapacita baterie?">
            <InputSection.VykonFVE
              name="baterie_kapacita"
              data={baterie_kapacita}
              defaultValue={baterie_kapacita[1]['value']}
            />
          </InputSection>
        )}
      </div>
    );
  };
};

export default App;
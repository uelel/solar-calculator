import React from 'react';

import { kraje, spotreba_jednotky, vykon_fve, baterie_kapacita } from '../../data';

// Components
import Header from '../Header';
import InputSection from '../InputSection';
import Kalkulace from '../Kalkulace';

class App extends React.Component {

  state = {
    vykon_fve: vykon_fve[3]['value'],
    baterie_kapacita: 0,
    vykonFVEShown: false
  };

  getItemPropByValue = (object, value, key) => {
    const item = object.find(item => {
      return item.value === value
    });
    if (item && item.hasOwnProperty(key)) {
      return item[key];
    } else {
      return 0;
    }
  }

  setVykonFVE = (value) => {
    this.setState({ vykon_fve: value });
  };

  setBaterieKapacita = (value) => {
    this.setState({ baterie_kapacita: value });
  };

  showVykonFVE = () => {
    this.setState({ vykonFVEShown: !this.state.vykonFVEShown }, () => {
      // Remove state of baterie_kapacita
      if (!this.state.vykonFVEShown) {
        this.setBaterieKapacita(0);
      }
    });
  }

  getCenaInstalace = () => {
    var price = 0;
    price += this.getItemPropByValue(vykon_fve, this.state.vykon_fve, 'price');
    price += this.getItemPropByValue(baterie_kapacita, this.state.baterie_kapacita, 'price');
    return price;
  };

  getDotace = () => {
    var dotace = 0;
    dotace += this.getItemPropByValue(vykon_fve, this.state.vykon_fve, 'dotace');
    return dotace;
  };

  getKonecneNaklady = () => {
    const price = this.getCenaInstalace();
    const dotace = this.getDotace();
    return (price-dotace);
  };

  render() {
    return (
      <div className="w-full flex flex-col items-center overflow-x-hidden text-center">
        <Header title="Přehled roční spotřeby a výroby elektřiny s fotovoltaikou"/>
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
            defaultValue={this.state.vykon_fve} 
            onChange={this.setVykonFVE}
          />
        </InputSection>
        <InputSection label="Jaký typ FVE plánujete pořídit?">
          <InputSection.TypFVE
            name="typ_fve"
            defaultValue="bez_baterie"
            onChange={this.showVykonFVE}
          />
        </InputSection>
        {this.state.vykonFVEShown === true && (
          <InputSection label="Jaká je plánovaná kapacita baterie?">
            <InputSection.BaterieKapacita
              name="baterie_kapacita"
              data={baterie_kapacita}
              defaultValue={this.state.baterie_kapacita}
              onChange={this.setBaterieKapacita}
            />
          </InputSection>
        )}
        <Kalkulace title="Souhrn investice do fotovoltaiky">
          <Kalkulace.Row
            label="Cena instalace"
            value={this.getCenaInstalace()}
            unit="Kč"
          />
          <Kalkulace.Row
            label="Dotace na řešení"
            value={this.getDotace()}
            unit="Kč"
          />
          <Kalkulace.Row
            label="Konečné náklady na pořízení"
            value={this.getKonecneNaklady()}
            unit="Kč"
          />
        </Kalkulace>
      </div>
    );
  };
};

export default App;
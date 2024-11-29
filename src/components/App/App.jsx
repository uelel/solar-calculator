import React from 'react';

import { kraje, spotreba_jednotky, vykon_fve, baterie_kapacita } from '../../data';

// Components
import Header from '../Header';
import InputSection from '../InputSection';
import Kalkulace from '../Kalkulace';

class App extends React.Component {

  constructor() {
    super();
    this.cena_eletriny = {
      value: 8.88,
      unit: "Kc/kWh"
    };
    this.fve_vykon_prepocet_bez_baterie = {
      value: 532,
      unit: "kWh/kWp"
    };
    this.fve_vykon_prepocet_s_baterii = {
      value: 826,
      unit: "kWh/kWp"
    };
  }

  state = {
    kraj: kraje[0]['value'],
    spotreba: 10000,
    spotreba_unit: spotreba_jednotky[0]['value'],
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

  setKraj = (value) => {
    this.setState({ kraj: String(value) });
  };

  setSpotreba = (arg) => {
    if (arg.value) {
      this.setState({ spotreba: Number(arg.value) });
    }
    if (arg.unit) {
      this.setState({ spotreba_unit: String(arg.value) });
    }
  };

  setVykonFVE = (value) => {
    this.setState({ vykon_fve: Number(value) });
  };

  setBaterieKapacita = (value) => {
    this.setState({ baterie_kapacita: Number(value) });
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

  getRocniUspora = () => {
    var uspora = 0;
    if (this.state.baterie_kapacita === 0) {
      uspora = Math.round(this.state.vykon_fve * this.fve_vykon_prepocet_bez_baterie.value * this.cena_eletriny.value);
    } else {
      uspora = Math.round(this.state.vykon_fve * this.fve_vykon_prepocet_s_baterii.value * this.cena_eletriny.value);
    }
    return uspora;
  };

  getNavratnost = () => {
    const naklady = this.getKonecneNaklady();
    const rocni_uspora = this.getRocniUspora();
    const navratnost = Math.round((naklady/rocni_uspora) * 10) / 10;
    return navratnost;
  };

  render() {
    return (
      <div className="w-full flex flex-col items-center overflow-x-hidden text-center">
        <Header title="Přehled roční spotřeby a výroby elektřiny s fotovoltaikou"/>
        <InputSection label="V jakém kraji žijete?">
          <InputSection.Kraj
            name="kraj"
            data={kraje}
            defaultValue={this.state.kraj}
          />
        </InputSection>
        <InputSection label="Jaká je vaše roční spotřeba elektřiny?">
          <InputSection.Spotreba
            name="spotreba"
            defaultValue={this.state.spotreba}
            data={spotreba_jednotky}
            defaultUnit={this.state.spotreba_unit}
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
          <Kalkulace.Row
            label="Úspora za elektřinu ročně"
            value={this.getRocniUspora()}
            unit="Kč"
          />
          <Kalkulace.Row
            label="Průměrná návratnost"
            value={this.getNavratnost()}
            unit="let"
          />
        </Kalkulace>
      </div>
    );
  };
};

export default App;
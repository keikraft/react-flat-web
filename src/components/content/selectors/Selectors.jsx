import './pageStyles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import XCheck from '../../../../../components/checkbox/XCheck';
import XSwitch from '../../../../../components/switch/XSwitch';
import {XRadioGroup, XRadioButton} from '../../../../../components/radio/XRadio';

const SelectorsPropTypes = {
  theme: PropTypes.string,
};
const SelectorsDefaultProps = {
  theme: 'red'
};

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'fightClub'
    };

    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
  }

  handleRadioButtonChange(radioValue) {
    this.setState({radioValue});
  }

  render() {
    return (
      <div>
        <h2 className="row">CheckBox</h2>
        <div className="row"><XCheck label="Default" /></div>
        <div className="row"><XCheck checked label="Checked" /></div>
        <div className="row"><XCheck checked disabled label="Disabled" /></div>
        <div className="row"><XCheck label="Themed" theme={this.props.theme} /></div>
        <h2 className="row">Radio Button</h2>
        <div className="row">
          <XRadioGroup name="playtest" value={this.state.radioValue} onChange={this.handleRadioButtonChange}>
            <XRadioButton label="12 Monkeys" value="monkeys12" />
            <XRadioButton checked label="Fight Club" value="fightClub" />
            <XRadioButton disabled label="Die Hard" value="dieHard" />
            <XRadioButton label="Trainspotting" value="trainspotting" theme={this.props.theme} />
          </XRadioGroup>
        </div>
        <h2 className="row">Switch</h2>
        <div className="row"><XSwitch label="Default" /></div>
        <div className="row"><XSwitch checked label="Checked" /></div>
        <div className="row"><XSwitch disabled label="Disabled" /></div>
        <div className="row"><XSwitch label="Themed" theme={this.props.theme} /></div>
      </div>
    );
  }
}

Selectors.propTypes = SelectorsPropTypes;
Selectors.defaultProps = SelectorsDefaultProps;

export default Selectors;
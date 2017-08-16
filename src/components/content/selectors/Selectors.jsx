import './pageStyles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Check from 'react-flat/Checkbox';
import Switch from 'react-flat/Switch';
import {RadioGroup, RadioButton} from 'react-flat/Radio';

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
        <div className="row"><Check label="Default" /></div>
        <div className="row"><Check checked label="Checked" /></div>
        <div className="row"><Check checked disabled label="Disabled" /></div>
        <div className="row"><Check label="Themed" theme={this.props.theme} /></div>
        <h2 className="row">Radio Button</h2>
        <div className="row">
          <RadioGroup name="playtest" value={this.state.radioValue} onChange={this.handleRadioButtonChange}>
            <RadioButton label="12 Monkeys" value="monkeys12" />
            <RadioButton checked label="Fight Club" value="fightClub" />
            <RadioButton disabled label="Die Hard" value="dieHard" />
            <RadioButton label="Trainspotting" value="trainspotting" theme={this.props.theme} />
          </RadioGroup>
        </div>
        <h2 className="row">Switch</h2>
        <div className="row"><Switch label="Default" /></div>
        <div className="row"><Switch checked label="Checked" /></div>
        <div className="row"><Switch disabled label="Disabled" /></div>
        <div className="row"><Switch label="Themed" theme={this.props.theme} /></div>
      </div>
    );
  }
}

Selectors.propTypes = SelectorsPropTypes;
Selectors.defaultProps = SelectorsDefaultProps;

export default Selectors;
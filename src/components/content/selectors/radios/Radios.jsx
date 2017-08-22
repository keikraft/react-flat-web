import './pageStyles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import {RadioButton, RadioGroup} from 'react-flat/Radio';

const RadiosPropTypes = {
  theme: PropTypes.string.isRequired,
};

class Radios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'fightClub'
    };
  }

  handleRadioButtonChange = (radioValue) => {
    this.setState({radioValue});
  };

  render() {
    return (
      <div>
        <h2 className="row">Radio Button</h2>
        <div className="row">
          <RadioGroup name="playtest" value={this.state.radioValue} onChange={this.handleRadioButtonChange}>
            <RadioButton label="12 Monkeys" value="monkeys12" />
            <RadioButton checked label="Fight Club" value="fightClub" />
            <RadioButton disabled label="Die Hard" value="dieHard" />
            <RadioButton label="Trainspotting" value="trainspotting" theme={this.props.theme} />
          </RadioGroup>
        </div>
      </div>
    );
  }
}

Radios.propTypes = RadiosPropTypes;

export default Radios;
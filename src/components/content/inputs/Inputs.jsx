import './pageStyles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import XInput from '../../../../../components/input/XInput';

const InputsPropTypes = {
  theme: PropTypes.string,
};
const InputsDefaultProps = {
  theme: 'red'
};
class Inputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      textHint: '',
      email: '',
      password: '',
      floating: '',
      error: '',
      errorLong: ''
    };
  }

  handleOnChange(name, value) {
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <h2>Inputs</h2>
        <XInput type="text" placeholder="Text" className="displayOverride" value={this.state.text} onChange={this.handleOnChange.bind(this, 'text')} />
        <XInput hint type="text" placeholder="Text (Default With Hint)" className="displayOverride" value={this.state.textHint} onChange={this.handleOnChange.bind(this, 'textHint')} />
        <XInput type="email" placeholder="Email (Themed with Icon)" className="displayOverride" theme={this.props.theme} icon="email" value={this.state.email} onChange={this.handleOnChange.bind(this, 'email')} />
        <XInput type="password" placeholder="Password (Default with Icon)" className="displayOverride" icon="lock" value={this.state.password} onChange={this.handleOnChange.bind(this, 'password')} />
        <XInput floating type="text" placeholder="Floating Text" className="displayOverride" theme="yellow" icon="star_rate" value={this.state.floating} onChange={this.handleOnChange.bind(this, 'floating')} />
        <h2>Disabled</h2>
        <XInput disabled type="text" placeholder="Disabled" className="displayOverride" />
        <XInput disabled type="text" placeholder="Disabled (with Icon)" className="displayOverride" icon="not_interested" />
        <h2>Error message</h2>
        <XInput type="text" placeholder="Error Message" className="displayOverride" error="This field is required." value={this.state.error} onChange={this.handleOnChange.bind(this, 'error')} />
        <XInput type="text" placeholder="Long Error Message" className="displayOverride" error="The error message will be wrapped if it's longer than the width of the input." value={this.state.errorLong} onChange={this.handleOnChange.bind(this, 'errorLong')} />
      </div>
    );
  }
}

Inputs.propTypes = InputsPropTypes;
Inputs.defaultProps = InputsDefaultProps;

export default Inputs;
import './pageStyles.scss';

import React from 'react';
import Immutable from 'immutable';

import Toaster from 'react-flat/Toaster';
import Button from 'react-flat/Button';
import Input from 'react-flat/Input';
import Slider from 'react-flat/Slider';
import {RadioButton, RadioGroup} from 'react-flat/Radio';

class ToasterDemo extends React.Component {
  constructor(props) {
    super(props);

    const fromJSOrdered = (js) => {
      return typeof js !== 'object' || js === null ? js :
        Array.isArray(js) ?
          Immutable.Seq(js).map(fromJSOrdered).toList() :
          Immutable.Seq(js).map(fromJSOrdered).toOrderedMap();
    };

    this.state = {
      toastPosition: 'top',
      toastSide: 'right',
      toastType: 'info',
      toastMessage: 'I\'m a Toast!',
      toastMessageError: null,
      toastTime: 0,
      toasts: fromJSOrdered({
        top: {left: {}, center: {}, right: {}},
        bottom: {left: {}, center: {}, right: {}}
      })
    };

    this.handleToastSideButtonChange = this.handleToastSideButtonChange.bind(this);
    this.handleToastPositionButtonChange = this.handleToastPositionButtonChange.bind(this);
    this.handleToastTypeButtonChange = this.handleToastTypeButtonChange.bind(this);
    this.handleCreateToastButtonMouseUp = this.handleCreateToastButtonMouseUp.bind(this);
    this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    this.handleSecSliderInputOnChange = this.handleSecSliderInputOnChange.bind(this);
  }

  handleToastSideButtonChange(toastSide) {
    this.setState({toastSide});
  }

  handleToastPositionButtonChange(toastPosition) {
    this.setState({toastPosition});
  }

  handleToastTypeButtonChange(toastType) {
    this.setState({toastType});
  }

  handleMessageInputOnChange(toastMessage) {
    const toastMessageError = toastMessage != null && toastMessage !== undefined && toastMessage !== '' ? null : 'You have to write a toast message.';
    this.setState({toastMessage, toastMessageError});
  }

  handleSecSliderInputOnChange(toastTime) {
    const seconds = parseInt(toastTime, 10);
    this.setState({toastTime: seconds});
  }

  handleCreateToastButtonMouseUp() {
    if (this.state.toastMessageError === null && this.state.toastMessage !== '') {
      this.toastCount = this.toastCount ? this.toastCount + 1 : 1;
      const {toastPosition: position, toastSide: side, toastType: type, toastMessage: message, toastTime: seconds} = this.state;
      const toastKey = `${position}${side}toast-${this.toastCount}`;

      const toastState = {
        type,
        message,
        seconds
      };
      this.setState({toasts: this.state.toasts.updateIn([position, side], (x) => { return x.set(toastKey, toastState); })});
    } else {
      this.setState({toastMessageError: 'You have to write a toast message.'});
    }
  }

  handleRemoveToast(position, side, toastKey) {
    this.setState({toasts: this.state.toasts.updateIn([position, side], (x) => { return x.delete(toastKey); })});
  }

  render() {
    return (
      <div>
        <h2>Toaster</h2>
        <div className="toaster-config">
          <div className="config-column">
            <div className="config-header">POSITION</div>
            <RadioGroup name="toastPosition" value={this.state.toastPosition} onChange={this.handleToastPositionButtonChange}>
              <RadioButton checked label="Top" value="top" />
              <RadioButton label="Bottom" value="bottom" />
            </RadioGroup>
          </div>
          <div className="config-column">
            <div className="config-header">SIDE</div>
            <RadioGroup name="toastSide" value={this.state.toastSide} onChange={this.handleToastSideButtonChange}>
              <RadioButton label="Left" value="left" />
              <RadioButton label="Center" value="center" />
              <RadioButton checked label="Right" value="right" />
            </RadioGroup>
          </div>
          <div className="config-column">
            <div className="config-header">TYPE</div>
            <RadioGroup name="toastType" value={this.state.toastType} onChange={this.handleToastTypeButtonChange}>
              <RadioButton checked label="Info" value="info" theme="blue" />
              <RadioButton label="Success" value="success" theme="green" />
              <RadioButton label="Warning" value="warning" theme="yellow" />
              <RadioButton label="Error" value="error" theme="red" />
            </RadioGroup>
          </div>
        </div>
        <div className="toaster-form">
          <Slider min={0} max={10} step={1} onChange={this.handleSecSliderInputOnChange} />
          <Input type="text" placeholder="Toast Message" theme="orange" icon="message" value={this.state.toastMessage} error={this.state.toastMessageError} onChange={this.handleMessageInputOnChange} />
          <Button raised text="Create Toast" onMouseUp={this.handleCreateToastButtonMouseUp} />
        </div>
        <Toaster top left className="topOverride" toasts={this.state.toasts.getIn(['top', 'left']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'top', 'left')} />
        <Toaster top center className="topOverride" toasts={this.state.toasts.getIn(['top', 'center']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'top', 'center')} />
        <Toaster top right className="topOverride" toasts={this.state.toasts.getIn(['top', 'right']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'top', 'right')} />
        <Toaster bottom left toasts={this.state.toasts.getIn(['bottom', 'left']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'bottom', 'left')} />
        <Toaster bottom center toasts={this.state.toasts.getIn(['bottom', 'center']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'bottom', 'center')} />
        <Toaster bottom right toasts={this.state.toasts.getIn(['bottom', 'right']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'bottom', 'right')} />
      </div>
    );
  }
}

export default ToasterDemo;

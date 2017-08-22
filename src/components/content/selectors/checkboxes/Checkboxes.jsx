import './pageStyles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Check from 'react-flat/Checkbox';

const CheckboxesPropTypes = {
  theme: PropTypes.string.isRequired,
};

function Checkboxes({theme}) {
  return (
    <div>
      <h2 className="row">CheckBox</h2>
      <div className="row"><Check label="Default" /></div>
      <div className="row"><Check checked label="Checked" /></div>
      <div className="row"><Check checked disabled label="Disabled" /></div>
      <div className="row"><Check label="Themed" theme={theme} /></div>
    </div>
  );
}

Checkboxes.propTypes = CheckboxesPropTypes;

export default Checkboxes;
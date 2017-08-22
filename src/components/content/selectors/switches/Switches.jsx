import './pageStyles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Switch from 'react-flat/Switch';

const SwitchesPropTypes = {
  theme: PropTypes.string.isRequired,
};

function Switches({theme}) {
  return (
    <div>
      <h2 className="row">Switch</h2>
      <div className="row"><Switch label="Default" /></div>
      <div className="row"><Switch checked label="Themed Checked" theme={theme} /></div>
      <div className="row"><Switch disabled label="Disabled" /></div>
    </div>
  );
}

Switches.propTypes = SwitchesPropTypes;

export default Switches;
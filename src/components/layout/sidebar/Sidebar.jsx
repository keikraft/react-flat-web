import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import {themes} from 'react-flat/Colors';

import RoutesEnum from 'router/routes.enum';

const SidebarPropTypes = {
  theme: PropTypes.string,
  collapsed: PropTypes.bool
};
const SidebarDefaultProps = {
  theme: themes.red,
  collapsed: false
};

const {getStarted, badges, buttons, colors, inputs, selectors, toasters} = RoutesEnum;
const {installation} = getStarted.subMenus;
const {checkboxes, radios, switches} = selectors.subMenus;

function Sidebar({theme, collapsed}) {
  const currentPage = window.location.hash.replace('#', '');

  return (
    <div className={classnames('app-sidebar', theme, {collapsed})}>
      <div className="app-sidebar-content">
        <ul>
          <li className="menu-group">
            <span>{getStarted.title}</span>
            <ul className="second-level">
              <li className={classnames({active: installation.route === currentPage})}><Link to={installation.route}>{installation.title}</Link></li>
            </ul>
          </li>
          <li className={classnames({active: badges.route === currentPage})}><Link to={badges.route}>{badges.title}</Link></li>
          <li className={classnames({active: buttons.route === currentPage})}><Link to={buttons.route}>{buttons.title}</Link></li>
          <li className={classnames({active: colors.route === currentPage})}><Link to={colors.route}>{colors.title}</Link></li>
          <li className={classnames({active: inputs.route === currentPage})}><Link to={inputs.route}>{inputs.title}</Link></li>
          <li className="menu-group">
            <span>{selectors.title}</span>
            <ul className="second-level">
              <li className={classnames({active: checkboxes.route === currentPage})}><Link to={checkboxes.route}>{checkboxes.title}</Link></li>
              <li className={classnames({active: radios.route === currentPage})}><Link to={radios.route}>{radios.title}</Link></li>
              <li className={classnames({active: switches.route === currentPage})}><Link to={switches.route}>{switches.title}</Link></li>
            </ul>
          </li>
          <li className={classnames({active: toasters.route === currentPage})}><Link to={toasters.route}>Toaster</Link></li>
        </ul>
      </div>
    </div>
  );
}

Sidebar.propTypes = SidebarPropTypes;
Sidebar.defaultProps = SidebarDefaultProps;

export default Sidebar;
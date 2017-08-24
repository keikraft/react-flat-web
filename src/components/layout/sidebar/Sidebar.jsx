import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import {themes} from 'react-flat/Colors';
import Wave from 'react-flat/Wave';

import Routes from 'router/routes';

const SidebarPropTypes = {
  theme: PropTypes.string,
  collapsed: PropTypes.bool
};
const SidebarDefaultProps = {
  theme: themes.red,
  collapsed: false
};

function Sidebar({theme, collapsed}) {
  const currentPage = window.location.hash.replace('#', '');

  const renderEntry = ({title, route}) => {
    return (
      <li key={route} className={classnames({active: route === currentPage})}>
        <Link to={route}>{title}</Link>
      </li>
    );
  };

  const renderMenuGroup = ({title, subMenus}) => {
    return (
      <li className="menu-group">
        <span>{title}</span>
        <ul className="second-level">
          {Object.keys(subMenus).map((key) => (renderEntry(subMenus[key])))}
        </ul>
      </li>
    );
  };

  return (
    <div className={classnames('app-sidebar', theme, {collapsed})}>
      <div className="app-sidebar-content">
        <ul>
          {Object.keys(Routes).map((key) => (Routes[key].subMenus ? renderMenuGroup(Routes[key]) : renderEntry(Routes[key])))}
        </ul>
      </div>
    </div>
  );
}

Sidebar.propTypes = SidebarPropTypes;
Sidebar.defaultProps = SidebarDefaultProps;

export default Sidebar;
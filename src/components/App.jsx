import 'src/layout/index.scss';
import 'src/layout/fonts/index.scss';
import 'src/layout/icons/_material-icons.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {themes} from 'react-flat/Colors';

import Navbar from 'components/layout/navbar/Navbar';
import Sidebar from 'components/layout/sidebar/Sidebar';
import ContentRoutes from 'router/ContentRoutes';

const themeColors = Object.keys(themes);

const AppPropTypes = {
  location: PropTypes.object.isRequired
};

class App extends React.Component {
  constructor(props) {
    super(props);

    const {pathname} = props.location;
    this.state = {
      theme: themes.red,
      sidebarCollapsed: pathname === '/' || pathname === '/home'
    };
  }

  componentWillReceiveProps(nextProps) {
    const {pathname} = nextProps.location;
    const sidebarCollapsed = pathname === '/' || pathname === '/home';
    this.setState({sidebarCollapsed});
  }

  handleToggleSidebar = () => {
    const sidebarCollapsed = !this.state.sidebarCollapsed;
    this.setState({sidebarCollapsed});
  };

  handleThemeSelect = (theme) => {
    this.setState({theme});
  };

  handleRouteRender = (route) => {
    this.setState({sidebarCollapsed: route === '/home'});
  };

  render() {
    const {theme, sidebarCollapsed} = this.state;

    return (
      <div className="app-main">
        <Navbar themeColors={themeColors} theme={theme} onToggleSidebar={this.handleToggleSidebar} onThemeSelect={this.handleThemeSelect} />
        <div className="app-content-wrapper">
          <Sidebar theme={theme} collapsed={sidebarCollapsed} />
          <div className="app-content">
            <ContentRoutes theme={theme} onRouteRender={this.handleRouteRender} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = AppPropTypes;

export default App;
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom';

import RoutesEnum from 'router/routes.enum';

import Home from 'components/content/home/Home';
import Installation from 'components/content/get-started/installation/Installation';
import Badges from 'components/content/badges/Badges';
import Buttons from 'components/content/buttons/Buttons';
import Colors from 'components/content/colors/Colors';
import Inputs from 'components/content/inputs/Inputs';
import Checkboxes from 'components/content/selectors/checkboxes/Checkboxes';
import Radios from 'components/content/selectors/radios/Radios';
import Switches from 'components/content/selectors/switches/Switches';
import Toasters from 'components/content/toasters/Toasters';

const ContentRoutesPropTypes = {
  theme: PropTypes.string.isRequired
};

const {home, getStarted, badges, buttons, colors, inputs, selectors, toasters} = RoutesEnum;
const {installation} = getStarted.subMenus;
const {checkboxes, radios, switches} = selectors.subMenus;

function ContentRoutes({theme}) {
  const renderRoute = (Component, props) => {
    return <Component theme={theme} {...props} />;
  };

  /* eslint-disable react/jsx-no-bind */
  return (
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/home" />)} />
      <Route key="home" path={home.route} render={renderRoute.bind(this, Home)} />
      <Route key="installation" path={installation.route} render={renderRoute.bind(this, Installation)} />
      <Route key="badges" path={badges.route} render={renderRoute.bind(this, Badges)} />
      <Route key="buttons" path={buttons.route} render={renderRoute.bind(this, Buttons)} />
      <Route key="colors" path={colors.route} render={renderRoute.bind(this, Colors)} />
      <Route key="inputs" path={inputs.route} render={renderRoute.bind(this, Inputs)} />
      <Route key="checkboxes" path={checkboxes.route} render={renderRoute.bind(this, Checkboxes)} />
      <Route key="radios" path={radios.route} render={renderRoute.bind(this, Radios)} />
      <Route key="switches" path={switches.route} render={renderRoute.bind(this, Switches)} />
      <Route key="toasters" path={toasters.route} render={renderRoute.bind(this, Toasters)} />
    </Switch>
  );
}

ContentRoutes.propTypes = ContentRoutesPropTypes;

export default ContentRoutes;
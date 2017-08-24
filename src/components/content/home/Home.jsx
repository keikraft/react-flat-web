import './pageStyles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AppLogo from 'components/content/app-logo/AppLogo';
import Button from 'react-flat/Button';

import Routes from 'router/routes';

const HomePropTypes = {
  history: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
};

function Home({history, theme}) {
  const handleExploreClick = () => {
    history.push(Routes.getStarted.subMenus.installation.route);
  };

  return (
    <div className={classnames('app-home', theme)}>
      <div className="home-header">
        <AppLogo big theme={theme} />
        <h2>React Flat</h2>
        <p>Components crafted with and for <b>React</b> and implemented with<br />kind of Material FLAT Design.</p>
      </div>
      <div className="home-content">
        <Button raised text="Explore" theme={theme} onClick={handleExploreClick} />
      </div>
    </div>
  );
}

Home.propTypes = HomePropTypes;

export default Home;
import React from 'react';
import { string } from 'prop-types';
import '@styles/app.scss';

const Main = ({appName}) => {
  return(
    <div className="container">
      <h1>Welcome to {appName}</h1>
      <strong>edit <code>src/App.js</code> to make change</strong>
    </div>
  )
};

Main.propTypes = {
  appName: string.isRequired
};

export default Main;

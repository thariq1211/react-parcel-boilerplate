import React from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  return(
    <div className="container">
      <h1>Welcome to Parcel x Reactjs</h1>
      <strong>edit <code>src/App.js</code> to make change</strong>
    </div>
  )
};
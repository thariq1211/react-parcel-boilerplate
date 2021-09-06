import React from 'react';
import Header from '@components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = React.lazy(() => import("./Routes/Main"));

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <React.Suspense fallback={null}>
              <Route path="/" exact>
                <Main appName="React x Parcel App" />
              </Route>
            </React.Suspense>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default HelloMessage;
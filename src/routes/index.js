import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// Pages
import Main from '~/pages/Main';
import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/home" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;

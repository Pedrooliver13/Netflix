import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../app/pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}; 
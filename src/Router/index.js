import React from 'react';
import Settings from '../pages/Settings';
import Preview from '../pages/Preview';
import { Switch, Route } from 'react-router-dom';


const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <></>} />
      <Route exact path="/settings" component={Settings} />
      <Route path="/preview" component={Preview} />
      <Route component={() => <h1>Not Found</h1>} />
    </Switch>
  )
}

export default Router;
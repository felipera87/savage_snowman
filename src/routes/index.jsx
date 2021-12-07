import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import LandingPage from '../pages/LandingPage';
import RoadmapPage from '../pages/RoadmapPage';
import MySnowmen from '../pages/MySnowmen';
import Lodge from '../pages/Lodge';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/mysnowman" component={MySnowmen} />
      <Route path="/lodge" component={Lodge} />
      <Route path="/roadmap" component={RoadmapPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;

import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";

// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import ContactUs from './pages/ContactUs';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={PublicLayout}
          component={Home}
        />
        <WithLayoutRoute
          exact
          path="/contact"
          layout={PublicLayout}
          component={ContactUs}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Routes;

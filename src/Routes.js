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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TearmsAndConditions from './pages/TearmsAndConditions';
import RegistrationForm from './pages/RegistrationForm';
import EnquireForm from './pages/EnquireForm';
import CourseDetailView from './pages/CourseDetailView';

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
        <WithLayoutRoute
          exact
          path="/privacy-policy"
          layout={PublicLayout}
          component={PrivacyPolicy}
        />
        <WithLayoutRoute
          exact
          path="/terms-and-conditions"
          layout={PublicLayout}
          component={TearmsAndConditions}
        />
        <WithLayoutRoute
          exact
          path="/student-resgistration"
          layout={PublicLayout}
          component={RegistrationForm}
        />
        <WithLayoutRoute
          exact
          path="/enquire-form"
          layout={PublicLayout}
          component={EnquireForm}
        />
        <WithLayoutRoute
          exact
          path="/course-detail-view"
          layout={PublicLayout}
          component={CourseDetailView}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Routes;

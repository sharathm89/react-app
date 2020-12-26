import React from "react";
import { bool } from "prop-types";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Header, Footer, NotFound } from "Rows";
import { LoadingIndicator } from "Atoms";

import routes from "./routes";

import "../assets/stylesheets/app.scss";

const Home = ({ loading }) => (
  <div className="container">
    <Header />
    {loading && <LoadingIndicator />}

    <Switch>
      {routes.length &&
        routes.map((route, key) => (
          <Route
            exact
            key={key}
            path={route.path}
            component={route.component}
          />
        ))}

      <Route component={NotFound} />
    </Switch>

    <Footer />
  </div>
);

Home.propTypes = {
  loading: bool,
};

const mapStateToProps = ({ settings }) => {
  const { loading } = settings;

  return { loading };
};

export default connect(mapStateToProps, null)(Home);

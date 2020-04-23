import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

//Import das rotas (routes)
import LoginPage from "../LoginPage";
import CreateTripPage from "../CreateTripPage";
import FormTrip from "../FormTrip"
import ListTripsPage from "../ListTripsPage"
import TripDetailsPage from "../TripDetailsPage"
import HomePage from "../HomePage";
import { connect } from "react-redux";

export const routes = {
  home: "/",
  form:"/form",
  login:"/login",
  create:"/create",
  list:"/list",
  details:"/details"
};

// Adicionando Routes e seus paths
function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.create} component={CreateTripPage}/>
        <Route exact path={routes.login} component={LoginPage}/>
        <Route exact path={routes.form} component={FormTrip}/>
        <Route exact path={routes.list} component={ListTripsPage}/>
        <Route exact path={routes.details} component={TripDetailsPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default connect() (Router);


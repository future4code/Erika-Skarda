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


const routes = {
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
        <Route path={routes.home} component={HomePage} />
        <Route path={routes.create} component={CreateTripPage}/>
        <Route path={routes.login} component={LoginPage}/>
        <Route path={routes.form} component={FormTrip}/>
        <Route path={routes.list} component={ListTripsPage}/>
        <Route path={routes.details} component={TripDetailsPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

// /    → Para o usuário escolher entre login e formulário de aplicação

// /application-form → Para qualquer usuário poder se increver

// /login → Para o admin poder se logar

// /trips/create  → Para criarmos viagens

// /trips/list    → Para vermos todas as viagens

// /trips/details  → Para vermos os candidatos de uma viagem
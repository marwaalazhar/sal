import React, { useEffect } from "react";
import config from "../../auth_config.json";
import history from "../../state/ducks/auth0/utils";
import { initAuth0 } from "../../state/ducks/auth0/actions";
import { loadUser } from "../../state/ducks/users/actions";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import routes from "../../routes";
import { Header, Spinner, Footer } from "../components";

interface Props {
  initAuth0: any;
  isLoading: boolean;
  isAuthenticated: boolean;
  currentUser: string;
  loadUser: any;
}
function App(props: Props) {
  useEffect(() => {
    // load currentUser
    if (props.isAuthenticated) {
      // props.loadUser(props.currentUser);
    }
  }, [props.isAuthenticated]);

  return (
    <Router history={history}>
      <Header />
      {props.isAuthenticated && (
        <div>
          {routes.map((route) => {
            return <Route key={route.path} {...route} />;
          })}
        </div>
      )}
      <Footer />
    </Router>
  );
}

function mapStateToProps(state: any) {
  return {
    isLoading: state.auth0.isLoading,
    isAuthenticated: state.auth0.isAuthenticated,
    currentUser: state.auth0.currentUser,
  };
}

const mapDispatchToProps = {
  initAuth0,
  loadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

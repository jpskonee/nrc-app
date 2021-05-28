import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./components/StateManagement/AuthState";

const PrivateRoute = ({ component: RoutedComponent, ...rest }) => {
  const { activeUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        return activeUser ? (
          <RoutedComponent {...propsRoute} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};


export default PrivateRoute;
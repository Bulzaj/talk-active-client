import React, {useEffect} from "react";
import keycloak from "../../keycloak/keycloak";
import {useDispatch, useSelector} from "react-redux";
import {authSuccess} from "../../store/actions/auth";
import CircularProgress from "@material-ui/core/CircularProgress";

const Communicator = props => {

  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.authenticated);
  const onUserAuthenticated = () => dispatch(authSuccess());


  useEffect(() => {
    keycloak
      .init({onLoad: 'login-required'})
      .then(authenticated => {
        onUserAuthenticated();
        console.log(keycloak)
       })
  }, [keycloak]);

  let communicator = <CircularProgress />
  if (authenticated) communicator = <h1>Authenticated</h1>
  console.log(authenticated);
  return (
    <div>
      {communicator}
    </div>
  )
}

export default Communicator;
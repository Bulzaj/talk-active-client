import React, {useEffect} from "react";
import keycloak from "../../keycloak/keycloak";

const Communicator = props => {

  useEffect(() => {
    keycloak
      .init({onLoad: 'login-required'})
      .then(authenticated => {
        console.log(keycloak)
       })
  }, [keycloak]);

  return (
    null
  )
}

export default Communicator;
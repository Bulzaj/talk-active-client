import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'talk-active',
  clientId: 'ta-web-client'
}

const keycloak = new Keycloak(keycloakConfig);

export default keycloak
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-hg0u8gx37e2g85v8.us.auth0.com"
    clientId= "u3YVR95BNlkOfrhBfFHqemNXwganO7Kx"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
  >
    <App />
  </Auth0Provider>,
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
import { BrowserRouter as Router } from 'react-router-dom'; // Import the router
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId="52390080266-ijp0vq9g1nu8ljivk818tfnnoe14avgl.apps.googleusercontent.com">
    <Router>
      <App />
    </Router>
  </GoogleOAuthProvider>
);

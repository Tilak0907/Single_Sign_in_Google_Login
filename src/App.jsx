import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import Home from './pages/Home';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLoginSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;
    
    // Send the credential token to Google to fetch user info
    fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credential}`)
      .then((res) => res.json())
      .then((data) => {
        setUser({
          name: data.name,
          email: data.email,
          picture: data.picture,
          token: credential,
        });
        // Redirect to the home page after successful login
        navigate('/home');
      })
      .catch((err) => console.error("Error fetching user data: ", err));
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    // Redirect to the login page after logout
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {user ? (
        <>
          <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>
          <Home user={user} />
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome to SkillVerse</h2>
          <GoogleLogin onSuccess={handleLoginSuccess}  onError={() => alert('Login Failed')} />
        </div>
      )}
    </div>
  );
}

export default App;

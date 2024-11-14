"use client";
// src/GoogleLoginButton.js
import { Box, Card } from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const client = process.env.NEXT_PUBLIC_CLIENT_ID;

const GoogleLoginButton = () => {
  const { login } = useAuth();
  const [error, setError] = useState('');

  const handleLogin = async (credentialResponse) => {
    try {
      if (!credentialResponse || !credentialResponse.credential) {
        throw new Error('Invalid credential response');
      }

      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Decoded token:', decoded);
      
      if (!decoded || !decoded.name || !decoded.email) {
        throw new Error('Invalid token payload');
      }

      const userData = {
        name: decoded.name,
        email: decoded.email,
        token: credentialResponse.credential,
        picture: decoded.picture || null
      };
      
      await login(userData);
      // The redirect will be handled by the login function in AuthContext
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0d7f5",
        display: "flex",
        padding: {
          xs: '16px',
          sm: '24px'
        },
        width: '100%'
      }}
    >
      <GoogleOAuthProvider clientId={client}>
        <Card
          align="center"
          sx={{
            mt: 4,
            backgroundColor: "#ffffff",
            p: 2,
            m: 2,
            minWidth: "25%",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            paddingY: 2,
            paddingX: 6,
            borderRadius: 2,
          }}
        >
          <Box sx={{ paddingBottom: 8, paddingTop: 6, textAlign: 'center' }}>
            <h1>Login to Cipher Sperren</h1>
          </Box>
          {error && (
            <Box sx={{ color: 'error.main', mb: 2 }}>
              {error}
            </Box>
          )}
          <Box sx={{ paddingBottom: 8 }}>
            <GoogleLogin
              onSuccess={handleLogin}
              onError={(error) => {
                console.error("Login failed:", error);
                setError('Login failed. Please try again.');
              }}
              logo_alignment="left"
              useOneTap
            />
          </Box>
        </Card>
      </GoogleOAuthProvider>
    </Box>
  );
};

export default GoogleLoginButton;

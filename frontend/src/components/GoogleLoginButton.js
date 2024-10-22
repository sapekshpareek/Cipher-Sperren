// src/GoogleLoginButton.js
import { Box, Card } from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const client = process.env.NEXT_PUBLIC_CLIENT_ID;
const GoogleLoginButton = () => {
  const handleLogin = (credentialResponse) => {
    console.log("Login Success:", credentialResponse);
    // Handle successful login here
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0d7f5",
        display: "flex",
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
            maxWidth: "50%",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            paddingY: 2,
            paddingX: 6,
            borderRadius: 2,
          }}
        >
          <Box sx={{ paddingBottom: 8, paddingTop: 6 }}>
            <h1>Login to</h1>
            <h1>Cipher Sperren</h1>
          </Box>
          <Box sx={{ paddingBottom: 8 }}>
            <GoogleLogin
              onSuccess={handleLogin}
              onFailure={(error) => console.error("Login failed:", error)}
              logo_alignment="left"
            />
          </Box>
        </Card>
      </GoogleOAuthProvider>
    </Box>
  );
};

export default GoogleLoginButton;

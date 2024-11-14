"use client";
// pages/index.js
import { Box } from "@mui/material";
import { useState } from "react";
import GoogleLoginButton from "../../components/GoogleLoginButton";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [encryptedData, setEncryptedData] = useState("");

  // Use the environment variable

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f00005",
      }}
    >
      <GoogleLoginButton />
    </Box>
  );
};

export default Home;

"use client";
// pages/index.js
import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import GoogleLoginButton from "../components/GoogleLoginButton";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [encryptedData, setEncryptedData] = useState("");

  // Use the environment variable
  const URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(URL);

  const handleEncrypt = async () => {
    try {
      const response = await axios.post(`${URL}encrypt`, { data: inputData });
      setEncryptedData(response.data.encrypted);
    } catch (error) {
      console.error("Error encrypting data:", error);
    }
  };

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

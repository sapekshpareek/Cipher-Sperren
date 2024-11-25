"use client";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState("encrypt");
  const [isLoading, setIsLoading] = useState(false);

  const handleEncryption = async () => {
    setIsLoading(true);
    try {
      if (!inputText || !key) {
        toast.error('Please fill in all fields');
        return;
      }
  
      if (key.length !== 4 || !/^\d{4}$/.test(key)) {
        toast.error('Key must be exactly 4 digits');
        return;
      }
  
      console.log('Sending request:', { mode, inputText, key });
  
      const apiURL = `${process.env.NEXT_PUBLIC_HOST_API}api/encrypt`;
  
      const payload = {
        message: inputText.trim(),
        key: key.trim(),
        mode: mode
      };
  
      console.log('Sending request with payload:', payload);
  
      const response = await axios.post(apiURL, payload, {
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Received response:', response.data);
  
      if (response.data.success) {
        setOutputText(response.data.result);
        toast.success(`${mode === 'encrypt' ? 'Encryption' : 'Decryption'} successful!`);
      } else {
        throw new Error(response.data.error || 'Operation failed');
      }
    } catch (error) {
      console.error("Error during operation:", error);
      if (error.code === 'ECONNABORTED') {
        toast.error('Request timed out. Please try again.');
      } else {
        toast.error(
          error.response?.data?.error || error.message || 
          'An unexpected error occurred. Please try again.'
        );
      }
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          padding: "40px",
          flex: "1",
          backgroundColor: "#fddfff",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: "16px", backgroundColor: "#fdeaff" }}>
              {/* Mode Selection */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                <Button
                  onClick={() => setMode("encrypt")}
                  sx={{
                    flex: 1,
                    py: 2,
                    borderRadius: "12px 12px 0 0",
                    backgroundColor: mode === "encrypt" ? "#fdeaff" : "grey.300",
                    color: mode === "encrypt" ? "common.black" : "grey.600",
                    fontWeight: mode === "encrypt" ? "bold" : "normal",
                    transition: "0.3s",
                  }}
                >
                  Encrypt
                </Button>
                <Button
                  onClick={() => setMode("decrypt")}
                  sx={{
                    flex: 1,
                    py: 2,
                    borderRadius: "12px 12px 0 0",
                    backgroundColor: mode === "decrypt" ? "secondary.main" : "grey.300",
                    color: mode === "decrypt" ? "white" : "grey.600",
                    fontWeight: mode === "decrypt" ? "bold" : "normal",
                    transition: "0.3s",
                  }}
                >
                  Decrypt
                </Button>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  {/* <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                    {mode === "encrypt" ? "Encryption" : "Decryption"} Mode
                  </Typography> */}
                  <TextField
                    fullWidth
                    label="Enter Text"
                    multiline
                    rows={4}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    sx={{
                      backgroundColor: "background.paper",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter 4-digit Key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    inputProps={{ maxLength: 4 }}
                    sx={{
                      backgroundColor: "background.paper",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handleEncryption}
                    sx={{ py: 1.5, borderRadius: "8px" }}
                  >
                    {mode === "encrypt" ? "Encrypt Text" : "Decrypt Text"}
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Result"
                    multiline
                    rows={4}
                    value={outputText}
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{
                      backgroundColor: "background.paper",
                      borderRadius: "8px",
                      mt: 2,
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

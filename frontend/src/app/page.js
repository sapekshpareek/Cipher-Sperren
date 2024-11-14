"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f00005",
          padding: "20px",
          flex: '1'
        }}
      >
        <h1>Cipher Sperren</h1>
        {user && <h2>Hello, {user.name}</h2>}
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

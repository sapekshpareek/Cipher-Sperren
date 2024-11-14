"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f00005",
        padding: "20px",
      }}
    >
      <h1>Cipher Sperren</h1>
      {user && <h2>Hello, {user.name}</h2>}
    </Box>
  );
};

export default Home;

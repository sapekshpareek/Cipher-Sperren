"use client";
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        // Check if the token is still valid (you might want to add token expiration check)
        setUser(parsedUser);
        document.cookie = `auth_token=${parsedUser.token}; path=/; secure; samesite=strict`;
      }
    } catch (err) {
      setError('Failed to restore authentication state');
      console.error('Auth restoration error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      document.cookie = `auth_token=${userData.token}; path=/; secure; samesite=strict`;
      router.push('/');
      toast.success('Welcome back!');
    } catch (err) {
      setError('Failed to log in');
      toast.error('Authentication failed');
      console.error('Login error:', err);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      localStorage.removeItem('user');
      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; secure; samesite=strict';
      router.push('/login');
      toast.success('Logged out successfully');
    } catch (err) {
      setError('Failed to log out');
      toast.error('Logout failed');
      console.error('Logout error:', err);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    login,
    logout,
    loading,
    error,
    clearError,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebaseConfig.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};

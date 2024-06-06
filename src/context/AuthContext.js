import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
 
  const [auth, setAuth] = useState({});
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("");

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        status,
        setStatus,
        user, 
        setUser     
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

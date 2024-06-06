import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
 
  const [auth, setAuth] = useState({});
  const [user, setUser] =useState(null);

  const login = (user) => {
    setUser(user);
  }
  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

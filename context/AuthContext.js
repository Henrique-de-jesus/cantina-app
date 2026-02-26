import { useState, createContext } from "react";

export const AuthContext = createContext({});
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return(
    <AuthContext.provider value = {{ user, setUser}}>
    {children}
    </AuthContext.provider>
  );
}
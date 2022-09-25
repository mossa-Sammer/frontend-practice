import { createContext, useState } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

export const UserContext = createContext(null as any);

const AuthContext = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;

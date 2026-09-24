import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../firebase/config";
import { logoutUser } from "../firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    await logoutUser();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
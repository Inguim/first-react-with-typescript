import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import randomString from "../utils/randomString";

type Auth = {
  children: React.ReactChild[];
};

type User = {
  email: string;
  name: string;
};

type Account = {
  email: string;
  password: string;
  name: string;
};

type ProviderValues = {
  signed: boolean;
  loading: boolean;
  user: User | null;
  setSigned: React.Dispatch<React.SetStateAction<boolean>>;
  Login: (email: string, password: string) => Promise<string | void>;
  Register: (callback: Account) => Promise<void>;
  Logout: () => void;
};

const AuthContext = createContext<ProviderValues>({} as ProviderValues);

export const AuthProvider = ({ children }: Auth) => {
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setSigned(true);
      setLoading(false);
      setUser(JSON.parse(storagedUser));
    }
    setLoading(false);
  }, []);

  function Logout() {
    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:token");
    setUser(null);
    setSigned(false);
  }

  async function Login(email: string, password: string): Promise<string | void> {
    if (!account) {
      return "Acredito que você ainda não se cadastrou no sistema";
    }

    if (account.email === email && account.password === password) {
      setUser({
        email: account.email,
        name: account.name,
      });
      setSigned(true);

      localStorage.setItem(
        "@App:user",
        JSON.stringify({ email: account.email, name: account.name })
      );
      localStorage.setItem("@App:token", randomString(50));
    } else {
      return "Acho que você errou suas credencias";
    }
  }

  async function Register({ email, password, name }: Account): Promise<void>{
    setAccount({
      email: email,
      password: password,
      name: name,
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed, loading, user, setSigned, Login, Logout, Register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

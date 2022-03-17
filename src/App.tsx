import { AuthProvider } from "./contexts/auth";
import { Theme } from "./providers";
import RoutesElements from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Theme>
      <AuthProvider>
        <GlobalStyle />
        <RoutesElements />
      </AuthProvider>
    </Theme>
  );
}

export default App;

import { Auth, Theme } from "./providers";
import RoutesElements from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Theme>
      <Auth>
        <GlobalStyle />
        <RoutesElements />
      </Auth>
    </Theme>
  );
}

export default App;

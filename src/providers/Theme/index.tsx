import { ThemeProvider as Box } from "styled-components";
import colors from "../../styles/colors";

type Theme = {
  children: React.ReactChild;
};

const ThemeProvider = ({ children }: Theme) => {
  return <Box theme={{ color: colors }}>{children}</Box>;
};

export default ThemeProvider;

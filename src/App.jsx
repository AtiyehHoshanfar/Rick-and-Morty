import Navbar from "./Navbar/Navbar";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

import { red } from "@mui/material/colors";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: red[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: red[400],
        },
      },
    },
  },
});
function App() {
  return (
    <CssVarsProvider theme={theme}>
      <div>
        <Navbar />
      </div>
    </CssVarsProvider>
  );
}

export default App;

import Navbar from "./Navbar/Navbar";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import "./App.css";
import { red } from "@mui/material/colors";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import CharacterProvider from "./context/CharacterProvider";
import EpisodeProvider from "./context/EpisodeProvider";
import SearchProvider from "./context/SearchProvider";

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
    <SearchProvider>
    <CharacterProvider>
      <EpisodeProvider>
        <CssVarsProvider theme={theme}>
          <div>
            <Toaster />
            <Navbar />
            <Layout />
          </div>
        </CssVarsProvider>
      </EpisodeProvider>
    </CharacterProvider>
    </SearchProvider>
  );
}

export default App;

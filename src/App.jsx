import Navbar from "./Navbar/Navbar";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

import { red } from "@mui/material/colors";
import { Toaster } from "react-hot-toast";
import Layout from "./layout/layout";
import CharacterProvider from "./context/characterProvider";




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
   <CharacterProvider >
     <CssVarsProvider theme={theme}>
      <div >
      <Toaster/> 
        <Navbar />
        <Layout/>
      </div>
    </CssVarsProvider>
   </CharacterProvider>
  );
}

export default App;

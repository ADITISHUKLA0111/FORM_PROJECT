import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import ShowData from "./components/ShowData";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
        light: "#f73378",
        dark: "#283593",
      },
      background: {
        default: "#F5F5F5",
        // default:"#B0B0B0"
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: {
              variant: "outlined",
            },
            style: {
              color: "white",
              my: 2,
              width: "150px",
              border: "1px solid white",
              margin: "0.5rem 1rem",
              "&:hover": {
                border: "1px solid white",
              },
            },
          },
        ],
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#3f51b5",
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          // The props to change the default for.
          shrink: true,
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Form />}></Route>
            <Route path="/Data" element={<ShowData />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

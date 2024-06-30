import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import AdminHome from "./AdminHome";
import AddVideo from "./AddVideo";
import EditVideo from "./EditVideo";
import DeleteVideo from "./DeleteVideo";
import ViewVideo from "./ViewVideo";
import Main from "./Main";
import Unregister from "./Unregister";
import Login from "./Login";

const theme = createTheme({
  palette: {
    primary: {
      main: '#001f3f', // Deep blue color
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        
        <BrowserRouter>
          <nav style={{
            backgroundColor: "seagreen", // Transparent purple
            padding: '10px',
            backdropFilter: 'blur(10px)',
          }}>
            <ul style={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              justifyContent: 'space-around'
            }}>
              <li>
                <Button
                  component={Link}
                  to="/AdminHome"
                  variant="contained"
                  color="primary"
                >
                  Admin Home
                </Button>
              </li>
              <li>
                <Button
                  component={Link}
                  to="/AddVideo"
                  variant="contained"
                  color="primary"
                >
                  Add Video
                </Button>
              </li>
              <li>
                <Button
                  component={Link}
                  to="/Main"
                  variant="contained"
                  color="primary"
                >
                  Main
                </Button>
              </li>
              <li>
                <Button
                  component={Link}
                  to="/Test"
                  variant="contained"
                  color="primary"
                >
                  Test
                </Button>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/AdminHome" element={<AdminHome />}></Route>
            <Route path="/AddVideo" element={<AddVideo />}></Route>
            <Route path="/EditVideo/:id" element={<EditVideo />}></Route>
            <Route path="/DeleteVideo/:id" element={<DeleteVideo />}></Route>
            <Route path="/ViewVideo/:id" element={<ViewVideo />}></Route>
            <Route path="/Main" element={<Main />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Unregister" element={<Unregister />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}



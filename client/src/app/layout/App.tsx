import { Box, Container } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import HomePage from "../../features/HomePage";

function App() {
  const location = useLocation();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <ScrollRestoration />
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar/>
          <Container maxWidth='xl' sx={{pt: 14}}>
              <Outlet />
          </Container>
        </>
      )}
      
    </Box>
  )
}

export default App

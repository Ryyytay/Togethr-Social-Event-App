import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Typography,
  Container,
  MenuItem,
  Toolbar,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";
import { useAccount } from "../../lib/hooks/useAccount";
import UserMenu from "./UserMenu";
import ThemeToggle from "../shared/components/ThemeToggle";

export default function NavBar() {
  const {uiStore} = useStore();
  const {currentUser} = useAccount();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: isDark 
            ? 'rgba(15, 15, 35, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: isDark 
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: isDark 
            ? '0 8px 32px rgba(0, 0, 0, 0.3)'
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MenuItem
                component={NavLink}
                to="/activities"
                sx={{ 
                  display: "flex", 
                  gap: 2,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: isDark 
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-1px)',
                  }
                }}
              >
                <Box
                  sx={{
                    background: isDark 
                      ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isDark 
                      ? '0 4px 16px rgba(102, 126, 234, 0.4)'
                      : '0 4px 16px rgba(24, 42, 115, 0.4)',
                  }}
                >
                  <Group fontSize="large" sx={{ color: 'white' }} />
                </Box>
                <Typography 
                  sx={{
                    position: 'relative',
                    fontWeight: 800,
                    background: isDark 
                      ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.8rem',
                  }} 
                  variant="h4" 
                >
                  Togethr
                </Typography>
                <Observer>
                {() => uiStore.isLoading ? (
                  <CircularProgress
                    size={20}
                    thickness={7}
                    sx={{
                      color: isDark ? '#667eea' : '#182a73',
                      position: 'absolute',
                      top: '30%',
                      left: '105%',
                    }}
                  />  
                  ) : null}
                </Observer>
              </MenuItem>
            </Box>
            <Box display='flex' alignItems='center' gap={1}>
              <ThemeToggle />
              {currentUser ? (
                <UserMenu />
              ) : (
                <>
                  <MenuItemLink to="/login">Login</MenuItemLink>
                  <MenuItemLink to="/register">Register</MenuItemLink>
                </>
              )}

            </Box>
          </Toolbar>
        </Container>
        



      </AppBar>
    </Box>
  );
}

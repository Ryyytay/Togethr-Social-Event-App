import { MenuItem, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({children, to}: {children: ReactNode, to: string}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <MenuItem
        component={NavLink}
        to={to}
        sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: isDark 
              ? 'rgba(255, 255, 255, 0.8)'
              : 'rgba(0, 0, 0, 0.8)',
            borderRadius: 2,
            mx: 0.5,
            px: 2,
            py: 1,
            transition: 'all 0.3s ease',
            '&:hover': {
                background: isDark 
                  ? 'rgba(102, 126, 234, 0.1)'
                  : 'rgba(24, 42, 115, 0.1)',
                color: isDark ? 'white' : 'black',
                transform: 'translateY(-1px)',
            },
            '&.active': {
                background: isDark 
                  ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                color: 'white',
                fontWeight: 700,
                boxShadow: isDark 
                  ? '0 4px 16px rgba(102, 126, 234, 0.3)'
                  : '0 4px 16px rgba(24, 42, 115, 0.3)',
            },
        }}
    >
      {children}
    </MenuItem>
  )
}
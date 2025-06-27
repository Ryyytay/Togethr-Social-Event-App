import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Divider, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { useAccount } from '../../lib/hooks/useAccount';
import { Link } from 'react-router';
import { Add, Logout, Person } from '@mui/icons-material';

export default function UserMenu() {
  const {currentUser, logoutUser} = useAccount();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        color='inherit'
        size='large'
        sx={{ 
          fontSize: '1.2rem',
          color: isDark ? 'white' : 'black',
          fontWeight: 600,
          borderRadius: 2,
          px: 2,
          py: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            background: isDark 
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-1px)',
          }
        }}
      >
        <Box display='flex' alignItems='center' gap={2}>
            <Avatar
              src={currentUser?.imageUrl}
              alt='current user image'
              sx={{
                border: isDark 
                  ? '2px solid rgba(102, 126, 234, 0.3)'
                  : '2px solid rgba(24, 42, 115, 0.3)',
                boxShadow: isDark 
                  ? '0 2px 8px rgba(102, 126, 234, 0.3)'
                  : '0 2px 8px rgba(24, 42, 115, 0.3)',
              }}
            />
            {currentUser?.displayName}
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            background: isDark 
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: isDark 
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: isDark 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
            borderRadius: 2,
            mt: 1,
          }
        }}
      >
        <MenuItem 
          component={Link} 
          to='/createActivity' 
          onClick={handleClose}
          sx={{
            color: theme.palette.text.primary,
            '&:hover': {
              background: isDark 
                ? 'rgba(102, 126, 234, 0.1)'
                : 'rgba(24, 42, 115, 0.1)',
            }
          }}
        >
            <ListItemIcon>
                <Add sx={{ color: isDark ? '#667eea' : '#182a73' }} />
            </ListItemIcon>
            <ListItemText>Create Activity</ListItemText>
        </MenuItem>
        <MenuItem 
          component={Link} 
          to={`/profiles/${currentUser?.id}`} 
          onClick={handleClose}
          sx={{
            color: theme.palette.text.primary,
            '&:hover': {
              background: isDark 
                ? 'rgba(102, 126, 234, 0.1)'
                : 'rgba(24, 42, 115, 0.1)',
            }
          }}
        >
            <ListItemIcon>
                <Person sx={{ color: isDark ? '#667eea' : '#182a73' }} />
            </ListItemIcon>
            <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <Divider sx={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }} />
        <MenuItem 
          onClick={() => {
            logoutUser.mutate();
            handleClose();
          }}
          sx={{
            color: theme.palette.text.primary,
            '&:hover': {
              background: isDark 
                ? 'rgba(231, 76, 60, 0.1)'
                : 'rgba(231, 76, 60, 0.1)',
            }
          }}
        >
            <ListItemIcon>
                <Logout sx={{ color: '#e74c3c' }} />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useAppTheme } from '../../../lib/hooks/useAppTheme';

interface ThemeAwareCardProps {
  title: string;
  content: string;
}

const ThemeAwareCard: React.FC<ThemeAwareCardProps> = ({ title, content }) => {
  const { isDark } = useAppTheme();

  return (
    <Card 
      sx={{ 
        mb: 2,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: isDark 
            ? '0 8px 25px rgba(0,0,0,0.4)' 
            : '0 8px 25px rgba(0,0,0,0.15)',
        }
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Box sx={{ mt: 2, fontSize: '0.875rem', color: 'text.secondary' }}>
          Current theme: {isDark ? 'Dark' : 'Light'}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ThemeAwareCard; 
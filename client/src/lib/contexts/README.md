# Theme System Documentation

This project implements a comprehensive light/dark theme switching system using Material-UI (MUI) v7.

## Features

- 🌓 **Light/Dark Mode Toggle**: Switch between light and dark themes
- 💾 **Persistent Storage**: Theme preference is saved to localStorage
- 🖥️ **System Preference Detection**: Automatically detects user's system theme preference
- 🎨 **Custom Theme Colors**: Tailored color palette for both light and dark modes
- 🔄 **Smooth Transitions**: CSS transitions for theme switching
- 📱 **Responsive Design**: Theme-aware components that adapt to screen size

## Usage

### Basic Theme Toggle

The theme toggle button is automatically included in the navbar. Users can click the sun/moon icon to switch themes.

### Using Theme in Components

#### Option 1: Using the `useAppTheme` hook (Recommended)

```tsx
import { useAppTheme } from '../lib/hooks/useAppTheme';

const MyComponent = () => {
  const { mode, toggleTheme, isDark, isLight } = useAppTheme();

  return (
    <Box sx={{ 
      backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
      color: isDark ? '#ffffff' : '#333333'
    }}>
      Current theme: {mode}
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </Box>
  );
};
```

#### Option 2: Using the `useTheme` hook directly

```tsx
import { useTheme } from '../lib/contexts/ThemeContext';

const MyComponent = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {mode}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};
```

### Theme-Aware Styling

#### Using MUI's `sx` prop with theme values

```tsx
import { Box } from '@mui/material';

const MyComponent = () => {
  return (
    <Box sx={{
      backgroundColor: 'background.paper',
      color: 'text.primary',
      border: 1,
      borderColor: 'divider',
      '&:hover': {
        backgroundColor: 'action.hover',
      }
    }}>
      This component automatically adapts to the current theme
    </Box>
  );
};
```

#### Using CSS-in-JS with theme values

```tsx
import { styled } from '@mui/material/styles';

const StyledComponent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));
```

## Theme Configuration

The theme is configured in `ThemeContext.tsx` and includes:

### Color Palette
- **Primary**: Blue shades (#182a73 for light, #4a90e2 for dark)
- **Secondary**: Teal shades (#20a7ac for light, #64b5f6 for dark)
- **Background**: Light gray (#f5f5f5) for light, dark gray (#121212) for dark
- **Text**: Dark gray (#333333) for light, white (#ffffff) for dark

### Component Overrides
- **AppBar**: Custom gradient backgrounds for both themes
- **Card**: Enhanced shadows and hover effects
- **CssBaseline**: Automatic theme-aware baseline styles

## Best Practices

1. **Use Theme Values**: Always use theme palette values instead of hardcoded colors
2. **Test Both Themes**: Ensure your components look good in both light and dark modes
3. **Smooth Transitions**: Add CSS transitions for theme switching
4. **Accessibility**: Ensure sufficient contrast ratios in both themes
5. **Consistent Spacing**: Use theme spacing values for consistent layouts

## Example Components

See `ThemeAwareCard.tsx` for an example of how to create theme-aware components with hover effects and smooth transitions.

## Troubleshooting

### Theme not switching
- Ensure the component is wrapped within `AppThemeProvider`
- Check that `useTheme` or `useAppTheme` is called within the provider

### Styling not updating
- Use theme palette values instead of hardcoded colors
- Ensure you're using MUI's `sx` prop or styled components
- Check that CSS custom properties are properly defined

### Performance issues
- Use `useMemo` for expensive theme-dependent calculations
- Avoid creating new objects in render functions 
import { Grid, Box, useTheme } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";


export default function ActivityDashboard() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #dee2e6 50%, #ced4da 75%, #adb5bd 100%)',
        pt: 2,
        pb: 4,
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
        <Grid size={7}>
          <ActivityList/>
        </Grid>
        <Grid 
          size={5}
          sx={{
            position: 'sticky',
            top: 112,
            alignSelf: 'flex-start',
            height: 'fit-content',
          }}
        >
          <ActivityFilters/>
        </Grid>
      </Grid>
    </Box>
  );
}

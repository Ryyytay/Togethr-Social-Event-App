import { Box, Typography, CircularProgress, useTheme } from "@mui/material";
import ActivitiyCard from "./ActivitiyCard";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const ActivityList = observer(function ActivityList() {
  const {activitiesGroup, isLoading, hasNextPage, fetchNextPage} = useActivities();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  const {ref, inView} = useInView({
    threshold: 0.5,
    
  });

  useEffect(() => {
    if (inView && hasNextPage ) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '200px' 
    }}>
      <CircularProgress 
        sx={{ 
          color: isDark ? '#667eea' : '#182a73',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          }
        }} 
      />
    </Box>
  );

  if (!activitiesGroup) return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '200px',
      textAlign: 'center'
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          color: theme.palette.text.secondary,
          fontWeight: 500
        }}
      >
        No activities found
      </Typography>
    </Box>
  );
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activitiesGroup.pages.map((activities, index) => (
        <Box 
          key={index}
          ref={index === activitiesGroup.pages.length - 1 ? ref : null}
          display='flex'
          flexDirection='column'
          gap={3}
        >
          {activities.items.map((activity) => (
            <ActivitiyCard
              key={activity.id}
              activity={activity}
            />
          ))}
        </Box>
      ))}
      {hasNextPage && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          py: 2 
        }}>
          <CircularProgress 
            size={24} 
            sx={{ color: isDark ? '#667eea' : '#182a73' }} 
          />
        </Box>
      )}
    </Box>
  );
});

export default ActivityList;

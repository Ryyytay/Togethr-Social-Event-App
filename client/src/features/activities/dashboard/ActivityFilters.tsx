import { Event, FilterList } from "@mui/icons-material";
import { Box, ListItemText, MenuItem, Paper, Typography, useTheme } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useStore } from "../../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const ActivityFilters = observer(function ActivityFilters() {
  const { activityStore: { filter, startDate, setFilter, setStartDate }} = useStore();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: 3, 
        borderRadius: 3,
        position: 'sticky',
        top: 112,
      }}
    >
      <Paper 
        sx={{ 
          p: 3, 
          borderRadius: 3,
          background: isDark 
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: isDark 
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: isDark 
            ? '0 8px 32px rgba(0, 0, 0, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              color: isDark ? "#667eea" : "#182a73",
              fontWeight: 700,
              fontSize: '1.1rem',
            }}
          >
            <FilterList sx={{ mr: 1.5, fontSize: 24 }} />
            Filters
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <MenuItem
              selected={filter === "all"}
              onClick={() => setFilter("all")}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  background: isDark 
                    ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                    : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                  color: 'white',
                  '&:hover': {
                    background: isDark 
                      ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                  }
                },
                '&:hover': {
                  background: isDark 
                    ? 'rgba(102, 126, 234, 0.1)'
                    : 'rgba(24, 42, 115, 0.1)',
                }
              }}
            >
              <ListItemText 
                primary="All events" 
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: filter === "all" ? 600 : 400,
                  }
                }}
              />
            </MenuItem>
            <MenuItem
              selected={filter === "isGoing"}
              onClick={() => setFilter("isGoing")}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  background: isDark 
                    ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                    : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                  color: 'white',
                  '&:hover': {
                    background: isDark 
                      ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                  }
                },
                '&:hover': {
                  background: isDark 
                    ? 'rgba(102, 126, 234, 0.1)'
                    : 'rgba(24, 42, 115, 0.1)',
                }
              }}
            >
              <ListItemText 
                primary="I'm going" 
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: filter === "isGoing" ? 600 : 400,
                  }
                }}
              />
            </MenuItem>
            <MenuItem
              selected={filter === "isHost"}
              onClick={() => setFilter("isHost")}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  background: isDark 
                    ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                    : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                  color: 'white',
                  '&:hover': {
                    background: isDark 
                      ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                  }
                },
                '&:hover': {
                  background: isDark 
                    ? 'rgba(102, 126, 234, 0.1)'
                    : 'rgba(24, 42, 115, 0.1)',
                }
              }}
            >
              <ListItemText 
                primary="I'm hosting" 
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: filter === "isHost" ? 600 : 400,
                  }
                }}
              />
            </MenuItem>
          </Box>
        </Box>
      </Paper>
      
      <Paper 
        sx={{ 
          width: "100%", 
          p: 3, 
          borderRadius: 3,
          background: isDark 
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: isDark 
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: isDark 
            ? '0 8px 32px rgba(0, 0, 0, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Typography
          variant="h6" 
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            color: isDark ? "#667eea" : "#182a73",
            fontWeight: 700,
            fontSize: '1.1rem',
          }}
        >
          <Event sx={{ mr: 1.5, fontSize: 24 }} />
          Select date
        </Typography>
        <Box sx={{
          '& .react-calendar': {
            background: 'transparent',
            border: 'none',
            fontFamily: 'inherit',
            width: '100%',
          },
          '& .react-calendar__navigation': {
            background: isDark 
              ? 'rgba(102, 126, 234, 0.1)'
              : 'rgba(24, 42, 115, 0.1)',
            borderRadius: 2,
            padding: 1,
            marginBottom: 2,
          },
          '& .react-calendar__navigation button': {
            color: isDark ? '#667eea' : '#182a73',
            fontWeight: 600,
            fontSize: '1rem',
            '&:hover': {
              background: isDark 
                ? 'rgba(102, 126, 234, 0.2)'
                : 'rgba(24, 42, 115, 0.2)',
              borderRadius: 1,
            }
          },
          '& .react-calendar__month-view__weekdays': {
            background: isDark 
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.05)',
            borderRadius: 2,
            padding: 1,
            marginBottom: 1,
          },
          '& .react-calendar__month-view__weekdays__weekday': {
            color: isDark 
              ? 'rgba(255, 255, 255, 0.8)'
              : 'rgba(0, 0, 0, 0.8)',
            fontWeight: 600,
            fontSize: '0.9rem',
          },
          '& .react-calendar__tile': {
            color: isDark 
              ? 'rgba(255, 255, 255, 0.8)'
              : 'rgba(0, 0, 0, 0.8)',
            background: 'transparent',
            border: 'none',
            borderRadius: 2,
            padding: '8px 4px',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: isDark 
                ? 'rgba(102, 126, 234, 0.2)'
                : 'rgba(24, 42, 115, 0.2)',
              color: isDark ? 'white' : 'black',
            },
            '&:focus': {
              background: isDark 
                ? 'rgba(102, 126, 234, 0.3)'
                : 'rgba(24, 42, 115, 0.3)',
              color: isDark ? 'white' : 'black',
            }
          },
          '& .react-calendar__tile--active': {
            background: isDark 
              ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
              : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
            color: 'white',
            fontWeight: 600,
            '&:hover': {
              background: isDark 
                ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
            }
          },
          '& .react-calendar__tile--now': {
            background: isDark 
              ? 'rgba(243, 156, 18, 0.2)'
              : 'rgba(243, 156, 18, 0.1)',
            color: '#f39c12',
            fontWeight: 600,
            '&:hover': {
              background: isDark 
                ? 'rgba(243, 156, 18, 0.3)'
                : 'rgba(243, 156, 18, 0.2)',
            }
          }
        }}>
          <Calendar
            value={startDate}
            onChange={date => setStartDate(date as Date)}
          />
        </Box>
      </Paper>
    </Box>
  )
});

export default ActivityFilters;

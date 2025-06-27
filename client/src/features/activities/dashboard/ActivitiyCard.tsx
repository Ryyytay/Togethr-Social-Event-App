import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Divider, Typography, useTheme } from "@mui/material";
import { Link } from "react-router";
import { AccessTime, Place, Visibility } from "@mui/icons-material";
import { formatDate } from "../../../lib/util/util";
import AvatarPopover from "../../../app/shared/components/AvatarPopover";

type Props = {
    activity: Activity;
}

export default function ActivitiyCard({activity}: Props) {
  const theme = useTheme();
  const label = activity.isHost ? 'You are hosting' : 'You are going';
  const color = activity.isHost ? 'secondary' : activity.isGoing ? 'warning' : 'default';

  const isDark = theme.palette.mode === 'dark';

  return (
    <Card 
      elevation={0}
      sx={{
        background: isDark 
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        border: isDark 
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: isDark 
            ? '0 20px 40px rgba(102, 126, 234, 0.2)'
            : '0 20px 40px rgba(0, 0, 0, 0.15)',
          border: isDark 
            ? '1px solid rgba(102, 126, 234, 0.3)'
            : '1px solid rgba(0, 0, 0, 0.2)',
          '& .activity-image': {
            transform: 'scale(1.05)',
          }
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: isDark 
            ? 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
            : 'linear-gradient(90deg, #182a73 0%, #20a7ac 100%)',
        }
      }}
    >
        <Box display='flex' alignItems='center' justifyContent='space-between' p={3}>
          <Box display='flex' alignItems='center' gap={2}>
            <Avatar 
              src={activity.hostImageUrl} 
              sx={{
                height: 70, 
                width: 70,
                border: isDark 
                  ? '3px solid rgba(102, 126, 234, 0.3)'
                  : '3px solid rgba(24, 42, 115, 0.3)',
                boxShadow: isDark 
                  ? '0 4px 16px rgba(102, 126, 234, 0.3)'
                  : '0 4px 16px rgba(24, 42, 115, 0.3)',
              }}
              alt="image of host"
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  color: theme.palette.text.primary,
                  mb: 0.5,
                }}
              >
                {activity.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '0.9rem',
                }}
              >
                Hosted by {' '} 
                <Link 
                  to={`/profiles/${activity.hostId}`}
                  style={{
                    color: isDark ? '#667eea' : '#182a73',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  {activity.hostDisplayName}
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box display='flex' flexDirection='column' gap={1.5}>
            {(activity.isHost || activity.isGoing) && (
              <Chip 
                variant="outlined" 
                label={label} 
                color={color} 
                sx={{
                  borderRadius: 2,
                  borderColor: activity.isHost 
                    ? (isDark ? '#667eea' : '#182a73')
                    : '#f39c12',
                  color: activity.isHost 
                    ? (isDark ? '#667eea' : '#182a73')
                    : '#f39c12',
                  fontWeight: 600,
                  background: activity.isHost 
                    ? (isDark ? 'rgba(102, 126, 234, 0.1)' : 'rgba(24, 42, 115, 0.1)')
                    : 'rgba(243, 156, 18, 0.1)',
                }} 
              />
            )}
            {activity.isCancelled && (
              <Chip 
                label='Cancelled' 
                color='error' 
                sx={{
                  borderRadius: 2,
                  fontWeight: 600,
                  background: 'rgba(231, 76, 60, 0.1)',
                }} 
              />
            )}
          </Box>
        </Box>
          
        <Divider sx={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}/>

        <CardContent sx={{ p: 3 }}>
          <Box display='flex' alignItems='center' mb={3} gap={3}>
            <Box display='flex' alignItems='center' gap={1}>
              <AccessTime sx={{ color: isDark ? '#667eea' : '#182a73', fontSize: 20 }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                }}
              >
                {formatDate(activity.date)}
              </Typography>
            </Box>
            <Box display='flex' alignItems='center' gap={1}>
              <Place sx={{ color: isDark ? '#764ba2' : '#20a7ac', fontSize: 20 }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                }}
              >
                {activity.venue}
              </Typography>
            </Box>
          </Box>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            {activity.description}
          </Typography>
          
          <Divider sx={{ borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)', mb: 3 }} />
          
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Box display='flex' gap={1}>
              {activity.attendees.map(att => (
                <AvatarPopover profile={att} key={att.id} />
              ))}
            </Box>
            
            <Button 
              component={Link} 
              to={`/activities/${activity.id}`} 
              size='medium' 
              variant='contained'
              startIcon={<Visibility />}
              sx={{
                background: isDark 
                  ? 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(45deg, #182a73 0%, #20a7ac 100%)',
                borderRadius: 3,
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: isDark 
                  ? '0 4px 16px rgba(102, 126, 234, 0.3)'
                  : '0 4px 16px rgba(24, 42, 115, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: isDark 
                    ? '0 8px 24px rgba(102, 126, 234, 0.4)'
                    : '0 8px 24px rgba(24, 42, 115, 0.4)',
                }
              }}
            >
              View Details
            </Button>
          </Box>
        </CardContent>
    </Card>
  )
}
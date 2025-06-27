import { Group, ArrowForward, Celebration } from "@mui/icons-material";
import { Typography, Paper, Box, Button, Container, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite alternate',
        },
        '@keyframes pulse': {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                animation: 'slideInLeft 1s ease-out',
                '@keyframes slideInLeft': {
                  '0%': { transform: 'translateX(-100px)', opacity: 0 },
                  '100%': { transform: 'translateX(0)', opacity: 1 },
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 3 }}>
                <Box
                  sx={{
                    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%',
                    p: 2,
                    mr: 2,
                    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
                    animation: 'float 3s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' },
                    }
                  }}
                >
                  <Group sx={{ height: 60, width: 60, color: 'white' }} />
                </Box>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                  }}
                >
                  Togethr
                </Typography>
              </Box>
              
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'white', 
                  mb: 3, 
                  fontWeight: 300,
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                Connect, Create, Celebrate
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  mb: 4, 
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                Join amazing activities, meet new people, and create unforgettable memories together.
              </Typography>
              
              <Button
                component={Link}
                to='/activities'
                size='large'
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  height: 56,
                  px: 4,
                  borderRadius: 28,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.6)',
                  }
                }}
              >
                Explore Activities
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                animation: 'slideInRight 1s ease-out 0.3s both',
                '@keyframes slideInRight': {
                  '0%': { transform: 'translateX(100px)', opacity: 0 },
                  '100%': { transform: 'translateX(0)', opacity: 1 },
                }
              }}
            >
              <Grid container spacing={2} maxWidth={400}>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 3,
                      p: 2,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255,255,255,0.15)',
                      }
                    }}
                  >
                    <Celebration sx={{ fontSize: 40, color: '#667eea', mb: 1 }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Events
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Discover amazing activities
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 3,
                      p: 2,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255,255,255,0.15)',
                      }
                    }}
                  >
                    <Group sx={{ fontSize: 40, color: '#764ba2', mb: 1 }} />
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Connect
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Meet new people
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 3,
                      p: 2,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255,255,255,0.15)',
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Create
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Host your own events
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    sx={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 3,
                      p: 2,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255,255,255,0.15)',
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Share
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Share your experiences
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
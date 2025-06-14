import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  AppBar,
  Box,
  Chip,
  Tabs,
  Tab
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Educational from './Educational'; // New component for educational videos/cards
import './App.css'; // Import custom CSS


// Airdrop data structure with your tweets
const airdrops = [
  {
    id: 1,
    projectName: "Airdrop Guide 1",
    description: "Check out this amazing airdrop opportunity! Follow the guide to participate.",
    twitterLink: "https://x.com/_sharath_d/status/1933589532248870914",
    imageUrl: "https://picsum.photos/300/200?random=1",
    date: "2024-03-14",
    status: "Active"
  },
  {
    id: 2,
    projectName: "Airdrop Guide 2",
    description: "Don't miss out on this exclusive airdrop! Complete the tasks to earn rewards.",
    twitterLink: "https://x.com/_sharath_d/status/1933833074682527987",
    imageUrl: "https://picsum.photos/300/200?random=2",
    date: "2024-03-14",
    status: "Active"
  },
  {
    id: 3,
    projectName: "Airdrop Guide 3",
    description: "New airdrop alert! Follow these steps to claim your rewards.",
    twitterLink: "https://x.com/_sharath_d/status/1933843094350508451",
    imageUrl: "https://picsum.photos/300/200?random=3",
    date: "2024-03-14",
    status: "Active"
  },
  {
    id: 4,
    projectName: "Airdrop Guide 4",
    description: "Limited time airdrop opportunity! Don't wait, start now.",
    twitterLink: "https://x.com/_sharath_d/status/1933220170002272709",
    imageUrl: "https://picsum.photos/300/200?random=4",
    date: "2024-03-14",
    status: "Active"
  },
  {
    id: 5,
    projectName: "Airdrop Guide 5",
    description: "Exclusive airdrop guide! Follow these steps to participate.",
    twitterLink: "https://x.com/_sharath_d/status/1933230846498177276",
    imageUrl: "https://picsum.photos/300/200?random=5",
    date: "2024-03-14",
    status: "Active"
  },
  {
    id: 6,
    projectName: "Airdrop Guide 6",
    description: "Exclusive airdrop guide! Follow these steps to participate.",
    twitterLink: "https://x.com/_sharath_d/status/1932117894911119645",
    imageUrl: "/images/airdrop6.jpg",
    date: "2024-03-14",
    status: "Active"
  }
];

function App() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="custom-appbar">
        <Box className="navbar-title" sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.main' }}>
          <Typography variant="h5" className="site-title" sx={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
            Crypto Airdrops Guide
          </Typography>
        </Box>
        <Tabs value={tab} onChange={handleTabChange} centered className="custom-tabs">
          <Tab label="Airdrops" className="custom-tab" />
          <Tab label="Educational Videos" className="custom-tab" />
        </Tabs>
      </AppBar>
      <Box sx={{ p: 3 }}>
        {tab === 0 && (
          <Box>
            <Typography variant="h4" gutterBottom>Airdrops</Typography>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {airdrops.map((airdrop) => (
                  <Grid item xs={12} sm={6} md={4} key={airdrop.id}>
                    <Card sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                      }
                    }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={airdrop.imageUrl}
                        alt={airdrop.projectName}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h5" component="h2" sx={{ 
                            fontWeight: 'bold',
                            color: '#1a1a1a'
                          }}>
                            {airdrop.projectName}
                          </Typography>
                          <Chip 
                            label={airdrop.status}
                            color={airdrop.status === 'Active' ? 'success' : 'default'}
                            size="small"
                          />
                        </Box>
                        
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
                          {airdrop.description}
                        </Typography>

                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          mt: 'auto'
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                            <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                            <Typography variant="caption">
                              {airdrop.date}
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            startIcon={<TwitterIcon />}
                            href={airdrop.twitterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              backgroundColor: '#1DA1F2',
                              '&:hover': {
                                backgroundColor: '#1991db'
                              },
                              borderRadius: '20px',
                              textTransform: 'none',
                              px: 2
                            }}
                          >
                            View Guide
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        )}
        {tab === 1 && (
          <Box>
            <Educational />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App; 
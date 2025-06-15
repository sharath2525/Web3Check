import React from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Box,
  CssBaseline,
  Button
} from '@mui/material';
import Educational from './Educational';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';

// Airdrop data structure with your tweets
const airdrops = [
  {
    id: 'humanity',
    projectName: "Humanity Protocol",
    description: "Get rewarded for verifying your identity on-chain with Humanity Protocol.",
    imageUrl: "https://airdrops.io/wp-content/uploads/2024/04/Humanity-Protocol-300x150.png",
    date: "2024-04-01",
    status: "Active",
    type: "html"
  },
  {
    id: 1,
    projectName: "Airdrop Guide 1",
    description: "Check out this amazing airdrop opportunity! Follow the guide to participate.",
    twitterLink: "https://x.com/_sharath_d/status/1933589532248870914",
    imageUrl: "https://picsum.photos/300/200?random=1",
    date: "2024-03-14",
    status: "Active",
    type: "html"
  },
  {
    id: 2,
    projectName: "Airdrop Guide 2",
    description: "Don't miss out on this exclusive airdrop! Complete the tasks to earn rewards.",
    twitterLink: "https://x.com/_sharath_d/status/1933833074682527987",
    imageUrl: "https://picsum.photos/300/200?random=2",
    date: "2024-03-14",
    status: "Active",
    type: "html"
  },
  {
    id: 3,
    projectName: "Airdrop Guide 3",
    description: "New airdrop alert! Follow these steps to claim your rewards.",
    twitterLink: "https://x.com/_sharath_d/status/1933843094350508451",
    imageUrl: "https://picsum.photos/300/200?random=3",
    date: "2024-03-14",
    status: "Active",
    type: "html"
  },
  {
    id: 4,
    projectName: "Airdrop Guide 4",
    description: "Limited time airdrop opportunity! Don't wait, start now.",
    twitterLink: "https://x.com/_sharath_d/status/1933220170002272709",
    imageUrl: "https://picsum.photos/300/200?random=4",
    date: "2024-03-14",
    status: "Active",
    type: "html"
  },
  {
    id: 5,
    projectName: "Airdrop Guide 5",
    description: "Exclusive airdrop guide! Follow these steps to participate.",
    twitterLink: "https://x.com/_sharath_d/status/1933230846498177276",
    imageUrl: "https://picsum.photos/300/200?random=5",
    date: "2024-03-14",
    status: "Active",
    type: "html"
  },
  {
    id: 6,
    projectName: "Airdrop Guide 6",
    description: "Exclusive airdrop guide! Follow these steps to participate.",
    imageUrl: "/images/airdrop6.jpg",
    date: "2024-03-14",
    status: "Active",
    type: "twitter",
    twitterLink: "https://x.com/_sharath_d/status/1933843094350508451"
  }
];

function Home() {
  const handleCardClick = (airdrop) => {
    if (airdrop.type === "twitter" && airdrop.twitterLink) {
      window.open(airdrop.twitterLink, "_blank");
    } else if (airdrop.type === "html") {
      window.location.href = `/airdrops/${airdrop.id}.html`;
    }
  };

  // Fallback image for broken links
  const handleImgError = (e) => {
    e.target.src = "https://via.placeholder.com/300x180?text=No+Image";
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight={700}>
       Airdrops
      </Typography>
      <Grid container spacing={4}>
        {airdrops.map((airdrop) => (
          <Grid item xs={12} sm={6} md={4} key={airdrop.id}>
            <Card
              elevation={6}
              sx={{
                borderRadius: 5,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                }
              }}
              onClick={() => handleCardClick(airdrop)}
            >
              <CardMedia
                component="img"
                height="180"
                image={airdrop.imageUrl}
                alt={airdrop.projectName}
                onError={handleImgError}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" fontWeight={700}>
                  {airdrop.projectName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {airdrop.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" color="text.secondary">
                    📅 Date: {airdrop.date} | ✅ Status: {airdrop.status}
                  </Typography>
                </Box>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-middle' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: '30px',
                      textTransform: 'none',
                      px: 2,
                      backgroundColor: '#7c3aed',
                      '&:hover': { backgroundColor: '#5b21b6' }
                    }}
                    onClick={e => { e.stopPropagation(); handleCardClick(airdrop); }}
                  >
                    Click here For Guidance 
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function NavTabs() {
  const location = useLocation();
  const navigate = useNavigate();
  // Set tab index based on current path
  const tabValue = location.pathname.startsWith('/educational') ? 1 : 0;

  return (
    <Tabs
      value={tabValue}
      textColor="inherit"
      TabIndicatorProps={{ style: { background: '#fff', height: 4, borderRadius: 2 } }}
      sx={{
        ".MuiTab-root": {
          color: '#fff',
          fontWeight: 600,
          borderRadius: 999,
          px: 3,
          mx: 0.5,
          '&.Mui-selected': {
            background: '#fff',
            color: '#7c3aed'
          },
          '&:hover': {
            background: 'rgba(255,255,255,0.2)'
          }
        }
      }}
    >
      <Tab label="AIRDROPS" onClick={() => navigate('/')} />
      <Tab label="EDUCATIONAL VIDEOS" onClick={() => navigate('/educational')} />
    </Tabs>
  );
}

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <AppBar position="sticky" elevation={6} sx={{ background: 'linear-gradient(to right, #7c3aed, #4f46e5)' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AdbIcon sx={{ mr: 1, color: '#fff', fontSize: 32 }} />
              <Typography variant="h5" noWrap sx={{ color: '#fff', fontWeight: 700 }}>
                Crypto Airdrops
              </Typography>
            </Box>
            <NavTabs />
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/educational" element={<Educational />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const educationalContent = [
  {
    id: 1,
    title: 'What is Web3?',
    description: 'An introduction to Web3 and decentralized technologies.',
    imageUrl: 'https://source.unsplash.com/featured/?blockchain',
    link: 'https://ethereum.org/en/web3/',
    date: '2024-05-01',
    status: 'Active'
  },
  {
    id: 5,
    title: "Airdrop Guide 5",
    description: "Exclusive airdrop guide! Follow these steps to participate.",
    link: "https://x.com/_sharath_d/status/1933230846498177276",
    imageUrl: "https://picsum.photos/300/200?random=5",
    date: "2024-03-14",
    status: "Active",
   
  },
  {
    id: 6,
    title: "Airdrop Guide 6",
    description: "Exclusive airdrop guide! Follow these steps to participate.",
    imageUrl: "/images/airdrop6.jpg",
    date: "2024-03-14",
    status: "Active",
    type: "twitter",
    link: "https://x.com/_sharath_d/status/1933843094350508451"
  }
];

function Educational() {
  // Fallback image for broken links
  const handleImgError = (e) => {
    e.target.src = "https://via.placeholder.com/300x180?text=No+Image";
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight={700}>
        Educational Videos
      </Typography>
      <Grid container spacing={4}>
        {educationalContent.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              elevation={6}
              sx={{
                borderRadius: 5,
                overflow: 'hidden',
                cursor: item.link ? 'pointer' : 'default',
                transition: 'all 0.3s ease-in-out',
                '&:hover': item.link ? {
                  transform: 'scale(1.03)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                } : {}
              }}
              onClick={() => item.link && window.open(item.link, '_blank')}
            >
              {item.video ? (
                <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    src={item.video}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  />
                </Box>
              ) : item.imageUrl ? (
                <CardMedia
                  component="img"
                  height="180"
                  image={item.imageUrl}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                  onError={handleImgError}
                />
              ) : (
                <Box sx={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
                  <PlayCircleOutlineIcon sx={{ fontSize: 60, color: '#bdbdbd' }} />
                </Box>
              )}
              <CardContent>
                <Typography gutterBottom variant="h6" fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                {item.date && item.status && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      📅 Date: {item.date} | ✅ Status: {item.status}
                    </Typography>
                  </Box>
                )}
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-middle' }}>
                  {item.link && (
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
                      onClick={e => { e.stopPropagation(); window.open(item.link, '_blank'); }}
                    >
                      Click here For Guidance
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Educational;
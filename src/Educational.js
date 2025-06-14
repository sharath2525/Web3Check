import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const educationalContent = [
  {
    id: 1,
    title: 'What is Web3?',
    description: 'An introduction to Web3 and decentralized technologies.',
    imageUrl: 'https://source.unsplash.com/featured/?blockchain',
    video: null,
    link: 'https://ethereum.org/en/web3/'
  },
  {
    id: 2,
    title: 'Web3 Explained (Demo Video)',
    description: 'Watch this demo video to understand the basics of Web3.',
    imageUrl: null,
    video: 'https://www.youtube.com/embed/2hNdkYInj4g',
    link: null
  }
];

function Educational() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Educational Videos
      </Typography>
      <Grid container spacing={3}>
        {educationalContent.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                  height="200"
                  image={item.imageUrl}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
              ) : (
                <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
                  <PlayCircleOutlineIcon sx={{ fontSize: 60, color: '#bdbdbd' }} />
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                {item.link && (
                  <Button
                    variant="contained"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: '#1DA1F2',
                      '&:hover': { backgroundColor: '#1991db' },
                      borderRadius: '20px',
                      textTransform: 'none',
                      px: 2
                    }}
                  >
                    Learn More
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Educational;
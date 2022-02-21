import React from 'react';
import { Typography, Container } from '@mui/material';

const Favorite = ({ favoriteParts }) => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h2"
        color="primary"
        align="center"
        mt={5}
        fontWeight={'bold'}
      >
        Favorite Parts:
      </Typography>
      <Typography variant="h3" color="primary" align="center">
        Not implemented!
      </Typography>
    </Container>
  );
};

export default Favorite;

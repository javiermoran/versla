import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement } from 'react';
import CategoryForm from '../components/CategoryForm';
import VerslaContainer from '../components/VerslaContainer';

const NewCategory = (): ReactElement => {
  return (
    <VerslaContainer title='Nueva categoría'>
      <Box component='div' sx={{ my: 2 }}>
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Registra una nueva categoría
        </Typography>
        <CategoryForm />
      </Box>
    </VerslaContainer>
  );
};

export default NewCategory;

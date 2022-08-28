import { Box, Button, Divider, Stack, TextField } from '@mui/material';
import React, { ReactElement } from 'react';

const CategoryForm = (): ReactElement => {
  return (
    <div className='versla-category-form'>
      <TextField id='category-name' label='Nombre' variant='outlined' />
      <Divider sx={{ my: 2 }} />
      <Box>
        <Stack spacing={2} direction='row' justifyContent='end'>
          <Button variant='contained' color='error'>
            Cancelar
          </Button>
          <Button variant='contained'>Guardar</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default CategoryForm;

import { Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import VerslaContainer from './VerslaContainer';

const Login = (): ReactElement => {
  return (
    <VerslaContainer>
      <Typography variant='h3' gutterBottom>
        Login
      </Typography>
    </VerslaContainer>
  );
};

export default Login;

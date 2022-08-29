import { Backdrop } from '@mui/material';
import React, { ReactElement, useContext } from 'react';
import LoadingContext from '../context/LoadingContext';
import DynamicLogo from './DynamicLogo';

const LoadingBackdrop = (): ReactElement => {
  const [loadingContext] = useContext(LoadingContext);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: 10000, backgroundColor: 'primary.main' }}
      open={loadingContext?.global}
    >
      <DynamicLogo />
    </Backdrop>
  );
};

export default LoadingBackdrop;

import { Alert, Snackbar } from '@mui/material';
import React, { ReactElement, useContext } from 'react';
import AlertsContext from '../context/AlertsContext';

const GlobalSnackBar = (): ReactElement => {
  const [alertsContext, setAlertsContext] = useContext(AlertsContext);

  const handleClose = () => {
    setAlertsContext({
      visible: false,
      type: 'success',
      message: '',
    });
  };

  return (
    <Snackbar
      open={alertsContext?.visible}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={alertsContext?.type}
        sx={{ width: '100%' }}
      >
        {alertsContext?.message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackBar;

import { Button, Icon, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import FirebaseSDK from '../lib/firebase/firebaseSDK';
import VerslaContainer from './VerslaContainer';

const Login = (): ReactElement => {
  const onLogin = (): void => {
    FirebaseSDK.login();
  };

  return (
    <VerslaContainer>
      <div className='versla-login'>
        <Typography variant='h4' gutterBottom sx={{ mt: 2 }}>
          ¡Bienvenido a Versla!
        </Typography>
        <Typography variant='h5' gutterBottom sx={{ my: 2 }}>
          Aquí podrás administrar tus listas de compras y ver estadísticas de
          tus compras y precio de los productos en el tiempo. Para continuar
          inicia sesión en nuestra plataforma
        </Typography>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          sx={{ my: 4 }}
          onClick={onLogin}
          startIcon={<Icon>login</Icon>}
        >
          Iniciar sesión
        </Button>
      </div>
    </VerslaContainer>
  );
};

export default Login;

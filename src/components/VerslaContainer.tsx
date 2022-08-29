import { Box, Container, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

interface IVerslaContainerProps {
  title?: string;
  children?: JSX.Element;
  actionEl?: JSX.Element;
}

const VerslaContainer = ({
  title,
  children,
  actionEl,
}: IVerslaContainerProps): ReactElement => {
  return (
    <div className='versla-container'>
      <Box sx={{ p: 1 }}>
        <div className='versla-container__header'>
          <div className='versla-container__header__title'>
            {title && (
              <Typography variant='h4' gutterBottom>
                {title}
              </Typography>
            )}
          </div>
          <div className='versla-container__header__action'>{actionEl}</div>
        </div>
        <Container maxWidth='md'>{children}</Container>
      </Box>
    </div>
  );
};

export default VerslaContainer;

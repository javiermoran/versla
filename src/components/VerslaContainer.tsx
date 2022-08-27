import { Paper, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

interface IVerslaContainerProps {
  title?: string;
  children?: JSX.Element;
}

const VerslaContainer = ({
  title,
  children,
}: IVerslaContainerProps): ReactElement => {
  return (
    <div className='versla-container'>
      <Paper variant='outlined' className='versla-container__paper'>
        {title && (
          <Typography variant='h3' gutterBottom>
            {title}
          </Typography>
        )}
        <div>{children}</div>
      </Paper>
    </div>
  );
};

export default VerslaContainer;

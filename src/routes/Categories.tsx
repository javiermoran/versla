import { Fab, Icon, Tooltip } from '@mui/material';
import React, { ReactElement } from 'react';
import VerslaContainer from '../components/VerslaContainer';
import { Link } from 'react-router-dom';

const Categories = (): ReactElement => {
  const createButton = (): ReactElement => {
    return (
      <Link to='new'>
        <Tooltip title='Nuevo'>
          <Fab color='primary' aria-label='add'>
            <Icon>add</Icon>
          </Fab>
        </Tooltip>
      </Link>
    );
  };

  return (
    <VerslaContainer
      title='Categorías'
      actionEl={createButton()}
    ></VerslaContainer>
  );
};

export default Categories;

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { take } from 'rxjs';
import CategoryForm from '../components/CategoryForm';
import VerslaContainer from '../components/VerslaContainer';
import AlertsContext from '../context/AlertsContext';
import ICategory from '../lib/models/ICategory';
import * as CategoriesService from '../lib/services/categoriesService';

const NewCategory = (): ReactElement => {
  const [, setAlertsContext] = useContext(AlertsContext);
  const navigate = useNavigate();

  const cancel = (): void => {
    navigate('../', { replace: true });
  };

  const save = (category: ICategory): void => {
    CategoriesService.createCategory(category)
      .pipe(take(1))
      .subscribe((): void => {
        setAlertsContext({
          visible: true,
          message: 'Categoría guardada exitosamente',
          type: 'success',
        });
        navigate('../', { replace: true });
      });
  };

  return (
    <VerslaContainer>
      <Box component='div' sx={{ my: 2 }}>
        <Typography variant='subtitle1' sx={{ mb: 2 }}>
          Registra una nueva categoría
        </Typography>
        <CategoryForm onCancel={cancel} onSave={save} />
      </Box>
    </VerslaContainer>
  );
};

export default NewCategory;

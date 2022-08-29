import { Box, Button, Divider, Stack, TextField } from '@mui/material';
import React, { ChangeEvent, ReactElement, useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import ICategory from '../lib/models/ICategory';
import IconSelector from './IconSelector';

interface ICategoryFormParams {
  initialCategory?: ICategory;
  onCancel: (...args: unknown[]) => unknown;
  onSave: (category: ICategory) => unknown;
}

const CategoryForm = ({
  initialCategory,
  onSave,
  onCancel,
}: ICategoryFormParams): ReactElement => {
  const [userContext] = useContext(UserContext);
  const [nameTouched, setNameTouched] = useState(false);
  const [category, setCategory] = useState(
    initialCategory
      ? initialCategory
      : {
          name: '',
          icon: '',
          organizationId: '',
        }
  );

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNameTouched(true);
    setCategory({ ...category, name: event?.target?.value });
  };

  const handleSaveClick = (): void => {
    setCategory({ ...category, organizationId: userContext?.selectedOrg?.uid });
    onSave({ ...category, organizationId: userContext?.selectedOrg?.uid });
  };

  return (
    <div className='versla-category-form'>
      <TextField
        id='category-name'
        label='Nombre'
        variant='outlined'
        error={!category?.name && nameTouched}
        value={category.name}
        onChange={handleNameChange}
        sx={{ mb: 4 }}
        helperText={
          !category?.name && nameTouched ? 'El nombre no puede estar vacío' : ''
        }
      />
      <IconSelector
        onIconSelect={(icon: string) => setCategory({ ...category, icon })}
      ></IconSelector>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Stack spacing={2} direction='row' justifyContent='end'>
          <Button onClick={onCancel} variant='contained' color='error'>
            Cancelar
          </Button>
          <Button
            variant='contained'
            onClick={handleSaveClick}
            disabled={!category.name || !category.icon}
          >
            Guardar
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default CategoryForm;

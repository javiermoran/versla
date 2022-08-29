import { Icon, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement, useState } from 'react';
import ICON_SELECTOR_LIST from '../lib/constants/icon-selector-list';

interface IIconSelectorProps {
  onIconSelect: (icon: string) => unknown;
}

const IconSelector = ({ onIconSelect }: IIconSelectorProps): ReactElement => {
  const [selectedIcon, setSelectedIcon] = useState('');

  const onIconClick = (icon: string): void => {
    setSelectedIcon(icon);
    onIconSelect(icon);
  };

  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant='caption'>Selecciona un ícono</Typography>
      <div className='icon-selector'>
        {ICON_SELECTOR_LIST.map(
          (icon: string): ReactElement => (
            <div key={icon} className='icon-selector__item'>
              <IconButton
                color={icon === selectedIcon ? 'primary' : 'default'}
                onClick={(): void => onIconClick(icon)}
              >
                <Icon sx={{ fontSize: 45 }}>{icon}</Icon>
              </IconButton>
            </div>
          )
        )}
      </div>
    </Box>
  );
};

export default IconSelector;

import { AppBar, Toolbar, Button } from '@mui/material';
import React, { ReactElement } from 'react';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import UserContextMenu from './UserContextMenu';

interface IPage {
  id: number;
  label: string;
  route: string;
}

const pages: IPage[] = [
  { id: 1, label: 'Productos', route: '/products' },
  { id: 2, label: 'Tiendas', route: '/stores' },
  { id: 3, label: 'Listas', route: '/lists' },
];

function Header(): ReactElement {
  return (
    <header className='versla-header'>
      <AppBar position='static'>
        <Toolbar>
          <div className='logo'>
            <Link className='versla-header__link' to='/'>
              VERSLA
            </Link>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(
              (page: IPage): ReactElement => (
                <Link
                  key={`link-${page.id}`}
                  className='versla-header__link'
                  to={page.route}
                >
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page.label}
                  </Button>
                </Link>
              )
            )}
          </Box>
          <UserContextMenu />
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;

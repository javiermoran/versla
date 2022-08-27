import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { UserInfo } from 'firebase/auth';
import React, { ReactElement, useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import FirebaseSDK from '../lib/firebase/firebaseSDK';

const UserContextMenu = (): ReactElement => {
  const [userContext, setUserContext] = useContext(UserContext);
  const [authVerified, setAuthVerified] = useState<boolean>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const logout = (): void => {
    FirebaseSDK.logout();
    setAnchorEl(null);
    setAuthVerified(false);
    setUserContext(null);
  };

  FirebaseSDK.authStateChange((data: UserInfo): void => {
    if (!authVerified) {
      setUserContext(data);
      setAuthVerified(true);
    }
  });

  const renderUser = (user: UserInfo): ReactElement => {
    return (
      <div className='versla-user-context' id='user-context-container'>
        <Button
          onClick={openMenu}
          sx={{ my: 2, color: 'white', display: 'inline' }}
        >
          {userContext?.displayName}
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
        <Avatar
          imgProps={{ referrerPolicy: 'no-referrer' }}
          alt={userContext?.displayName || ''}
          src={userContext?.photoURL || ''}
        />
      </div>
    );
  };

  const renderLoginButton = (): ReactElement => (
    <Button
      onClick={(): void => FirebaseSDK.login()}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      Login
    </Button>
  );

  return (
    <div>{!!userContext ? renderUser(userContext) : renderLoginButton()}</div>
  );
};

export default UserContextMenu;

import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { UserInfo } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore/lite';
import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { finalize, take } from 'rxjs';
import LoadingContext from '../context/LoadingContext';
import UserContext from '../context/UserContext';
import FirebaseSDK from '../lib/firebase/firebaseSDK';
import * as OrganizationsService from '../lib/services/organizationsService';

const UserContextMenu = (): ReactElement => {
  const [userContext, setUserContext] = useContext(UserContext);
  const [, setLoadingContext] = useContext(LoadingContext);
  const [authVerified, setAuthVerified] = useState<boolean>();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect((): void => {
    setLoadingContext({ global: true });
  }, [setLoadingContext]);

  const logout = async (): Promise<any> => {
    await FirebaseSDK.logout();
    setAuthVerified(false);
    setAnchorEl(null);
    setUserContext(null);
  };

  const getOrganizations = (user: UserInfo): void => {
    OrganizationsService.getOrganizations(user?.uid)
      .pipe(
        take(1),
        finalize((): void => {
          setLoadingContext({ global: false });
        })
      )
      .subscribe((organizations: DocumentData[]): void => {
        setUserContext({
          user,
          organizations,
          selectedOrg: organizations[0],
        });
      });
  };

  FirebaseSDK.authStateChange((user: UserInfo): void => {
    if (!authVerified) {
      console.log(user);
      if (user) {
        setUserContext({ user });
        getOrganizations(user);
      } else {
        console.log('no user');
        setLoadingContext({ global: false });
        setUserContext(null);
      }
      setAuthVerified(true);
    }
  });

  const renderUser = (): ReactElement => {
    return (
      <div className='versla-user-context' id='user-context-container'>
        <Button
          onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
            setAnchorEl(event.currentTarget);
          }}
          sx={{ my: 2, color: 'white', display: 'inline' }}
        >
          {userContext?.user?.displayName}
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={(): void => {
            setAnchorEl(null);
          }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>My account</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
        <Avatar
          imgProps={{ referrerPolicy: 'no-referrer' }}
          alt={userContext?.user?.displayName || ''}
          src={userContext?.user?.photoURL || ''}
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

  return !!userContext ? renderUser() : renderLoginButton();
};

export default UserContextMenu;

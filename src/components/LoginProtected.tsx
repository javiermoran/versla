import React, { ReactElement, useContext } from 'react';
import UserContext from '../context/UserContext';
import Login from './Login';

interface ILoginProtected {
  children: ReactElement;
}

const LoginProtected = ({ children }: ILoginProtected): ReactElement => {
  const [userContext] = useContext(UserContext);

  return !!userContext?.user ? <div>{children}</div> : <Login />;
};

export default LoginProtected;

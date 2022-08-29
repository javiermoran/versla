import React, { ReactElement, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Dashboard from './routes/Dashboard';
import Products from './routes/Products';
import Stores from './routes/Stores';
import LoginProtected from './components/LoginProtected';
import UserContext from './context/UserContext';
import IUser from './lib/models/IUser';
import Categories from './routes/Categories';
import NewCategory from './routes/NewCategory';
import LoadingContext from './context/LoadingContext';
import LoadingBackdrop from './components/LoadingBackdrop';
import GlobalSnackBar from './components/GlobalSnackBar';
import AlertsContext from './context/AlertsContext';
import IAlert from './lib/models/IAlert';

function App(): ReactElement {
  const [userContext, setUserContext] = useState<IUser | null>(null);
  const [loadingContext, setLoadingContext] = useState({ global: false });
  const [alertsContext, setAlertsContext] = useState<IAlert>({
    visible: false,
    message: '',
    type: 'info',
  });

  return (
    <BrowserRouter>
      <div className='App versla'>
        <LoadingContext.Provider value={[loadingContext, setLoadingContext]}>
          <UserContext.Provider value={[userContext, setUserContext]}>
            <AlertsContext.Provider value={[alertsContext, setAlertsContext]}>
              <GlobalSnackBar />
              <LoadingBackdrop />
              <Header />
              <Container maxWidth='lg'>
                <LoginProtected>
                  <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='categories' element={<Outlet />}>
                      <Route path='' element={<Categories />} />
                      <Route path='new' element={<NewCategory />} />
                    </Route>
                    <Route path='products' element={<Products />} />
                    <Route path='stores' element={<Stores />} />
                    <Route path='*'></Route>
                  </Routes>
                </LoginProtected>
              </Container>
            </AlertsContext.Provider>
          </UserContext.Provider>
        </LoadingContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

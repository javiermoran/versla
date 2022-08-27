import React, { ReactElement, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Dashboard from './routes/Dashboard';
import Products from './routes/Products';
import Stores from './routes/Stores';
import LoginProtected from './components/LoginProtected';
import UserContext from './context/UserContext';
import IUser from './lib/models/IUser';
import Categories from './routes/Categories';

function App(): ReactElement {
  const [userContext, setUserContext] = useState<IUser | null>(null);

  return (
    <BrowserRouter>
      <div className='App versla'>
        <UserContext.Provider value={[userContext, setUserContext]}>
          <Header />
          <Container maxWidth='lg'>
            <LoginProtected>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='categories' element={<Categories />} />
                <Route path='products' element={<Products />} />
                <Route path='stores' element={<Stores />} />
              </Routes>
            </LoginProtected>
          </Container>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;

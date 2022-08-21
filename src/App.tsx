import './App.scss';
import React, { ReactElement } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Dashboard from './routes/Dashboard';
import Products from './routes/Products';
import Stores from './routes/Stores';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Container maxWidth='lg'>
          <Outlet />
        </Container>
      </div>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='products' element={<Products />} />
        <Route path='stores' element={<Stores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

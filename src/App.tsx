import { FC, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ConverterPage from './pages/HomePage/ConverterPage/ConverterPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';

const App: FC = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/converter' element={<ConverterPage/>} />
    </Routes>
    </>
  )
}

export default App

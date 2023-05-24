import { FC, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ConverterPage from './pages/ConverterPage/ConverterPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage/AboutPage';

const App: FC = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/converter' element={<ConverterPage/>} />
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Footer from './Components/Footer';

import Header from './Components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

import GlobalStyles from './styles/GlobalStyles';


function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={ <Profile/> }/>
        <Route path="/:username" element={ <Profile/> }/>
        <Route path="/:username/:reponame" element={ <Repo/>}/>
      </Routes>

      <Footer/>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;

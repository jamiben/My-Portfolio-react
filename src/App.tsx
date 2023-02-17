import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../src/Components/Header/Header'
import Profil from '../src/Components/Profil/Profil';
// import Contact from './Components/Contact/Contact'
import './App.css';
import Error from './Components/Error/Error';
import Projects from './Components/Projects/Projects';

function App() {
  return (
      <div className='appContent'>
        <Header />
        <BrowserRouter>  
          <Routes>
            <Route path="*" element={< Error/>}/>
            <Route index element={<Profil />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />}/> */}
          </Routes>
        </BrowserRouter>
      </div>


  );
}

export default App;



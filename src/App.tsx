import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyContext from './Context/Context'

import CanvasComponent from './Components/Canva/Canva';
import Header from './Components/Canva/Header/Header'
import Profil from './Components/Canva/Profil/Profil';
// import Contact from './Components/Contact/Contact'
import './App.css';
import Error from './Components/Error/Error';
import Projects from './Context/Projects/Projects';
import ParentNode from './Context/Context';

function App() {

  const [burgerButtonOpen, setBurgerButtonOpen] = useState(false);


  return (
    <MyContext.Provider value={{burgerButtonOpen, setBurgerButtonOpen}}>

      <div className='contentProfile'>

        <CanvasComponent />
        <BrowserRouter>  
          <Routes>
            {/* <Route path="*" element={< Error/>}/> */}
            <Route path="/profil" element={<Profil />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>


  );
}

export default App;



import React from 'react'
import Home from './view/home/Home';
import Contacto from './view/Contacto';
import SobreNosotros from './view/SobreNosotros/SobreNosotros';
import TomaHora from './view/TomaHora';

import {Routes, Route} from "react-router-dom";

function App() {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------



// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------



// ---------------------------------------------
// III) JSX
// ---------------------------------------------

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/sobrenosotros" element={<SobreNosotros />}/>
        <Route path="/tomadehora" element={<TomaHora />}/>
      </Routes>
    </>
  )
}

export default App

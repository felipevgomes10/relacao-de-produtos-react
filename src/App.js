import React from 'react';
import {GlobalStorage} from './GlobalContext';
import Home from './Components/Home';
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Contato from './Components/Contato';
import NotFound from './Components/NotFound';
import Produto from './Components/Produto';

const App = () => {

  return (
      <GlobalStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contato' element={<Contato />} />
            <Route path='produto/:id' element={<Produto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
  )
}

export default App

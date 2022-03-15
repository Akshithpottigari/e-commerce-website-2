import React from 'react';
import reactDom from 'react-dom';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'




import Homepage from './components/Homepage'
import Electronics from './components/Electronics';
import Jewelery from './components/Jewelery.js';
import Mensclothing from './components/Mensclothing.js';
import Womensclothing from './components/Womensclothing.js';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/electronics" element={<Electronics />} />
  <Route path="/jewelery" element={<Jewelery/>} />
  <Route path="/mensclothing" element={<Mensclothing/>} />
  <Route path="/womensclothing" element={<Womensclothing/>} />
</Routes>
</BrowserRouter>
</>

  );
}

export default App;
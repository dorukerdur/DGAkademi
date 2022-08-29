import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Favoritues from './components/Favoritues';
import Detail from './components/Detail';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Wrapper/>}/>
          <Route path="/favoritues" element={Favoritues}/>
          <Route exact path="/detail/:id" element={<Detail/>}/>
        </Routes>
    </Router>
  );
}



import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Favoritues from './components/Favoritues';
import Detail from './components/Detail';
import Card from './components/Card';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Wrapper/>}/>
          <Route exact path="/favoritues" element={<Favoritues/>}/>
          <Route exact path="/detail/:id" element={<Detail/>}/>
          <Route exact path="/payment" element={<Card/>}/>
        </Routes>
    </Router>
  );
}



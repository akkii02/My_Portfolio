import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <Route>
    <Header/>
    <Home/>
    </Route>
    </BrowserRouter>
  );
}

export default App;

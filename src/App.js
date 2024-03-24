import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CardFooter from './Components/CardFooter';
function App() {
    return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Login></Login>} />
        <Route path="/Components/Home" element={<Home></Home>} />
      </Routes>
    </Router>
    )
}
export default App;
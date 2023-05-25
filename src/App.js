import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomeRoute from './components/HomeRoute';
import NumberAndString from './components/NumberAndString'
import StringAndColor from './components/StringAndColor';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomeRoute/>}/>
        <Route path ="/:item" element={<NumberAndString/>}/>
        <Route path ="/:item/:textColor/:backgroundColor" element={<StringAndColor/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

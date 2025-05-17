import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import React from "react";



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}



export default App;

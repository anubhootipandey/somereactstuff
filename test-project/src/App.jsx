import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Home from "./components/Counter/Home";

const App = () => {
  return (
    <>
    <Home />
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

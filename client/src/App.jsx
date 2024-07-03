import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CanvasModel from "./canvas/index";

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shirt" element={<CanvasModel component="Shirt" />} /> */}
          {/* <Route path="/can" element={<CanvasModel component="Can" />} /> */}
          <Route path="/shoe" element={<CanvasModel component="Shoe" />} />
          <Route path="/phone" element={<CanvasModel component="Phone" />} />
          {/* <Route path="/laptop" element={<CanvasModel component="Laptop" />} /> */}
          <Route path="/watch" element={<CanvasModel component="Watch" />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Blogpost from "./pages/BlogPost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Blogpost />} />
      </Routes>
    </Router>
  );
};

export default App;

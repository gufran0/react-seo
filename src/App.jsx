// App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Blogpost from "./pages/BlogPost";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:slug" element={<Blogpost />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

// App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Blogpost from "./pages/BlogPost";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:slug" element={<Blogpost />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

// App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Blogpost from "./pages/BlogPost";
import Layout from "./components/Layout";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:slug" element={<Blogpost />} />

            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={NotFoundPage} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

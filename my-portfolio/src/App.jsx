import React, { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Profile = lazy(() => import("./pages/Profile"));
const Feedback = lazy(() => import("./pages/Feedback"));

function App() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Routes>
        {/* parent route */}
        <Route path="/" element={<Body/>}>
          {/* child routes */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

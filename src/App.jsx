import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Routes>
        {/* parent route */}
        <Route path="/" element={<Body/>}>
          {/* child routes */}
          <Route path="/" element={<Feed/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { baseURL } from "../utils/constents";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((store) => store.user);
  const fetchUserData = async () => {
    if (userData) return;
    if (location.pathname === '/login') return;
    try {
      const responce = await axios.get(baseURL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(responce.data));
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
      console.log("Error while fetching user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

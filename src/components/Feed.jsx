import React, { useEffect } from "react";
import { baseURL } from "../utils/constents";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeedSuccess } from "../utils/feedSlice";
import UserCard from "./userCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store)=>store.feed)
  const fetchUsers = async () => {
    if(feedData) return
    try {
      const res = await axios.get(
        baseURL + "/feed",
        { withCredentials: true }
      );
      dispatch(getFeedSuccess(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return <>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 my-10 px-6">
    {feedData?.map((ele) => (
      <UserCard key={ele.id} user={ele} />
    ))}
  </div>
  </>
};

export default Feed;

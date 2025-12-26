import React, { useEffect } from "react";
import { baseURL } from "../utils/constents";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeedSuccess } from "../utils/feedSlice";
import UserCard from "./userCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);
  const fetchUsers = async () => {
    if (feedData) return;
    try {
      const res = await axios.get(baseURL + "/feed", { withCredentials: true });
      dispatch(getFeedSuccess(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!feedData) return;
  if (feedData.length === 0)
    return <div className="justify-center my-10">No New Users Data</div>;
return (
  <div className="relative w-full h-[520px] flex justify-center items-center my-20">
    {feedData?.slice(0, 1).map((ele, index) => (
      <UserCard
        key={ele._id}
        user={ele}
        index={index}
      />
    ))}
  </div>
);
};

export default Feed;

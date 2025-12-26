import React from "react";
import { baseURL } from "../utils/constents";
import axios from "axios";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const toShow = location.pathname !== "/profile";
  const { _id, firstName, lastName, age, photoUrl, about, gender } = user;
  const handleSendRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        baseURL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      console.log(res);
      dispatch(removeUserFromFeed(_id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-200 w-75 shadow-sm">
      <figure>
        <img
          //   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/
          src={photoUrl}
          alt="Shoes"
          className="w-75"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName + " " + lastName}
          {age && <div className="badge badge-secondary">{age}</div>}
          {gender && <div className="badge badge-secondary">{gender}</div>}
        </h2>
        <p>{about}</p>
        {toShow && (
          <div className="card-actions justify-end my-4">
            <button
              className=" btn btn-primary"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignored
            </button>
            <button
              className=" btn btn-secondary"
              onClick={() => handleSendRequest("intrested", _id)}
            >
              Intrested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;

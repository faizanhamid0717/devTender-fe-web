import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, photoUrl, about, gender } = user;
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
        <div className="card-actions justify-end my-4">
          <button className=" btn btn-primary">Ignored</button>
          <button className=" btn btn-secondary">Intrested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import React, { useState } from "react";
import UserCard from "./userCard";
import { baseURL } from "../utils/constents";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleSaveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        baseURL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.user));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <>
      <div className="flex justify-center items-start gap-8 my-10">
        <UserCard user={{firstName,lastName,age,gender,about,photoUrl}} />

        <div className="card w-96 bg-primary text-primary-content shadow-lg">
          <div className="card-body">
            <h2 className="card-title justify-center font-bold">
              Edit Profile
            </h2>

            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                className="input input-bordered w-full my-2 !text-black placeholder:text-black"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                className="input input-bordered w-full my-2 !text-black placeholder:text-black"
                onChange={(e) => setLastName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Avatar"
                value={photoUrl}
                className="input input-bordered w-full my-2 !text-black placeholder:text-black"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />

              <input
                type="number"
                placeholder="Age"
                value={age}
                className="input input-bordered w-full my-2 !text-black placeholder:text-black"
                onChange={(e) => setAge(e.target.value)}
              />

              <input
                type="text"
                placeholder="Gender"
                value={gender}
                className="input input-bordered w-full my-2 !text-black placeholder:text-black"
                onChange={(e) => setGender(e.target.value)}
              />

              <input
                type="text"
                placeholder="About"
                value={about}
                className="input input-bordered w-full my-2 !text-black placeholder:text-black"
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="card-actions justify-center mt-4">
              <button className="btn !text-black" onClick={handleSaveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;

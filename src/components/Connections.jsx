import React, { useEffect } from "react";
import { baseURL } from "../utils/constents";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import UserCard from "./userCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  console.log({ connections });
  const fetchConnections = async () => {
    try {
      const response = await axios.get(baseURL + "/user/connections", {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch(addConnections(response.data.data));
    } catch (error) {
      console.log({ "error :": error });
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) return <>No Connections Found</>;
  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-black text-2xl">Connections</h1>

      {connections?.map((ele) => {
        const { firstName, lastName, age, gender, photoUrl, about } = ele;
        return (
          <div
            key={ele.id}
            className="flex m-4 p-4 rounded-lg w-1/3 mx-auto border-1 bg-base-300"
          >
            <div>
              <img
                alt="photo"
                src={photoUrl}
                className="w-20 h-20 rounded-full"
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + "," + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;

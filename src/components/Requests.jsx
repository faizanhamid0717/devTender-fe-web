import axios from "axios";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../utils/constents";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        baseURL + "/request/review/" +  status  + "/" + _id,
        {},
        { withCredentials: true }
      );
      console.log(res)
      dispatch(removeRequest(_id))
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(baseURL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.log({ error: error });
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;
  if (requests.length === 0) return <div className="flex justify-center my-20" >No Connection Request Found</div>;
  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-black text-2xl">Connections Requests</h1>

      {requests?.map((ele) => {
        const { firstName, lastName, age, gender, photoUrl, about } =
          ele.fromUserId;
        return (
          <div
            key={ele._id}
            className="flex justify-between items-center m-4 p-4 rounded-lg w-1/2 mx-auto border-1 bg-base-300"
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

            <div>
              <button className="btn btn-primary mx-2" onClick={()=>reviewRequest('rejected',ele._id)}>Reject</button>
              <button className="btn btn-secondary mx-2" onClick={()=>reviewRequest('accepted',ele?._id)}>Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

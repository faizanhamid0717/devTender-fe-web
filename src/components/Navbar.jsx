import axios from "axios";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../utils/constents";
import { removeUser } from "../utils/userSlice";
import { clearFeed } from "../utils/feedSlice";

const Navbar = () => {
  const userDetails = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLogout = async () => {
    // e.preventDefault();
    try {
      const res = await axios.post(
        `${baseURL}/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUser())
      dispatch(clearFeed())
        navigate("/login");
      console.log("Logout successful:", res);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="navbar bg-primary text-primary-content shadow-sm">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost  text-xl font-bold
"
        >
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RHWF74dET5CHe2R2txpDXnNecxMkaaoh3Q&s"
              alt="DevTinder logo"
              className="w-8 h-8 object-contain"
            /> */}
          DevTinder
        </Link>
      </div>
      <div className="flex items-center gap-3">
        {userDetails && (
          <>
            {/* Welcome text */}
            <p className=" sm:block text-sm font-medium">
              Welcome!{" "}
              <span className="font-semibold">{userDetails?.firstName}</span>
            </p>

            {/* Avatar dropdown */}
            <div className="dropdown dropdown-end mx-2 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border border-gray-300"
              >
                <div className="w-10 rounded-full">
                  <img alt="user-profile" src={userDetails?.photoUrl} />
                </div>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow bg-primary text-primary-content"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                 <li>
                  <Link to="/requests">Requests</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

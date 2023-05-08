import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const logout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      props.setName("");
    } catch (error) {
      console.log(error);
    }
  };

  let menu;
  if (props.name === "") {
    menu = (
      <>
        <Link
          to="/login"
          className="ease-out duration-300 border-b border-white hover:border-b-slate-700 hover:border-b-1 text-[#19376D]"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="ease-out duration-300 border-b border-white hover:border-b-slate-700 hover:border-b-1 text-[#19376D]"
        >
          Register
        </Link>
      </>
    );
  } else {
    menu = (
      <Link
        to="/"
        className="ease-out duration-300 border-b border-white hover:border-b-slate-700 hover:border-b-1 text-[#19376D]"
        onClick={logout}
      >
        Logout
      </Link>
    );
  }

  return (
    <>
      <nav className="flex items-center justify-between h-[10vh] md:h-[13vh] font-bold px-5 text-[13px] md:text-[15px] lg:text-[17px] shadow-md ">
        <div>
          <Link
            to="/"
            className="ease-out duration-200 hover:opacity-90 text-[2rem] text-[#0B2447]"
          >
            Home
          </Link>
        </div>
        <div className="flex justify-evenly gap-4 text-[1rem]">{menu}</div>
      </nav>
    </>
  );
};
export default Navbar;

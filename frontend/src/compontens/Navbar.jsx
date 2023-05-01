import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const logout = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/api/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res);
      props.setName("");
    } catch (error) {
      console.log(error);
    }
  };

  let menu;
  if (props.name === "") {
    menu = (
      <>
        <Link to="/login" className="ease-out duration-200 hover:opacity-90">
          Login
        </Link>
        <Link to="/register" className="ease-out duration-200 hover:opacity-90">
          Register
        </Link>
      </>
    );
  } else {
    menu = (
      <Link
        to="/"
        className="ease-out duration-200 hover:opacity-90"
        onClick={logout}
      >
        Logout
      </Link>
    );
  }

  return (
    <>
      <nav className="flex items-center justify-between bg-red-600 text-white shadow-md h-10 md:h-12 font-bold px-5 text-[13px] md:text-[15px] lg:text-[17px]">
        <div>
          <Link to="/" className="ease-out duration-200 hover:opacity-90">
            Home
          </Link>
        </div>
        <div className="flex justify-evenly gap-4">{menu}</div>
      </nav>
    </>
  );
};
export default Navbar;

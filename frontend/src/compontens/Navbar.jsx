import { Link } from "react-router-dom";

Link;

const Navbar = (props) => {
  return (
    <>
      <nav className="flex items-center justify-between bg-red-600 text-white shadow-md h-10 md:h-12 font-bold px-5 text-[13px] md:text-[15px] lg:text-[17px]">
        <div>
          <Link to="/" className="ease-out duration-200 hover:opacity-90">
            Home
          </Link>
        </div>

        <div className="flex justify-evenly gap-4">
          <Link to="/login" className="ease-out duration-200 hover:opacity-90">
            {props.login}
          </Link>
          <Link
            to="/register"
            className="ease-out duration-200 hover:opacity-90"
          >
            {props.logreg}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

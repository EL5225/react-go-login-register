import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        {
          name: nama,
          email: email,
          password: pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama,
            email,
            pass,
          }),
        }
      );

      console.log(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto my-24">
        <div className="flex items-center justify-center">
          <div className="flex h-[50vh] md:h-[60vh] w-[90vw] md:w-[60vw] items-center shadow-lg justify-center">
            <form onSubmit={submit} className="text-[16px] md:text-[17px]">
              <div className="flex flex-col ">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="p-2 mb-2 w-[60vw] md:w-[30vw] h-[5vh] border-2 border-gray-500 hover:border-black rounded-md"
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your Email"
                  className="p-2 mb-2 w-[60vw] md:w-[30vw] h-[5vh] border-2 border-gray-500 hover:border-black rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col my-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  required
                  placeholder="Enter your Password"
                  className="p-2 w-[60vw] md:w-[30vw] h-[5vh] border-2 border-gray-500 hover:border-black rounded-md"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center justify-evenly h-[13vh] mt-6">
                <button className="w-20 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white hover:text-gray-300 font-bold mt-2 ease-in duration-150 ">
                  Sign up
                </button>
                <span className="text-[14px]">
                  Already have an account? Sign in{" "}
                  <Link
                    to="/login"
                    className="ease-out duration-100 hover:underline hover:text-red-400"
                  >
                    Here
                  </Link>
                  !
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

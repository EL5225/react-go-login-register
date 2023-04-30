import Navbar from "../compontens/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    getName();
  });

  const getName = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar login="Log in" logreg="Register" />
      <div className="container mx-auto h-full text-center my-36">
        <span className="text-[70px] md:text-[100px]">Struck</span>
        <span>Industries</span>
        <h2 className="font-bold">Welcome to Struck Industries</h2>
        <h4>{props.nama}</h4>
      </div>
    </div>
  );
};

export default Home;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./compontens/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const getName = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/user/`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res.data.user);
        setName(res.data.user.name);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getName();
  }, []);

  return (
    <BrowserRouter>
      <Navbar name={name} setName={setName} />
      <Routes>
        <Route path="/" exact element={<Home name={name} />} />
        <Route path="/login" exact element={<Login setName={setName} />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/navbar" exact element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

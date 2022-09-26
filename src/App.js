import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Signup/Header";
import Home from "./components/Signup/Home";
import Login from "./components/Signup/Login";
import Sample from "./components/Signup/Sample";
// import Details from "./components/Signup/Details";
import Errror from "./components/Signup/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </>
  );
}

export default App;

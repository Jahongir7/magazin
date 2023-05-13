import { Route, Routes } from "react-router-dom";
import { About, Home } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
  );
};

export default Routers;

import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;

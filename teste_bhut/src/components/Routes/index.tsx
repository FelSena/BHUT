import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default MainRoutes;

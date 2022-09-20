import { ToastContainer } from "react-toastify";
import "./App.css";
import MainRoutes from "./components/Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MainRoutes />
    </div>
  );
}

export default App;

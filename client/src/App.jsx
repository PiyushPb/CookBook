import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./layout/Dashboard";
import Recipie from "./pages/Recipie";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/recipe/:recipeId" element={<Recipie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

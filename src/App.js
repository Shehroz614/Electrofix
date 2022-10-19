import "./css/App.css";
import Nabvar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Nabvar />
        <Routes>
        <Route exact path="/" element={<Home/>} ></Route>;
          <Route exact path="/SignIn/" element={<SignIn/>} ></Route>;
          <Route path="/Dashboard/*" element={<Dashboard/>} ></Route>;
        </Routes>
      </Router>
    </div>
  );
}

export default App;

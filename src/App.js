import "./css/App.css";
import Nabvar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Nabvar />
        <Routes>
        <Route exact path="/" element={<Home/>} ></Route>;
          <Route exact path="/SignIn" element={<SignIn/>} ></Route>;
        </Routes>
      </Router>
    </div>
  );
}

export default App;

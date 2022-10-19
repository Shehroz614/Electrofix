import "./css/App.css";
import Nabvar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div>
      <Router>
        <Nabvar />
        <Routes>
        <Route exact path="/" element={<Home/>} ></Route>;
          <Route exact path="/SignIn/" element={<SignIn/>} ></Route>;
          <Route path="/Dashboard/*" element={<Dashboard/>} ></Route>;
          <Route exact path="/about/" element={<About/>}></Route>
          <Route exact path="/contact/" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

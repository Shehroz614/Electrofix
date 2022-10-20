import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Nabvar() {
  const [SideMenu, SetSideMenu] = useState(false);

  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Nav"
        >
          <div className="NavTitle"><a href="/">ElectroFix</a></div>
          <div className="NavSecDiv">
            <ul className="NavList">
            <Link to="/">
                <motion.li className={url==="/" ? "NavActive" : ""} whileTap={{ scale: 0.95 }}>Home</motion.li>
              </Link>
              <Link to="/scope/">
                <motion.li  className={url==="/scope/" ? "NavActive" : ""} whileTap={{ scale: 0.95 }}>Scope</motion.li>
              </Link>
              <Link to="/services/">
                <motion.li  className={url==="/services/" ? "NavActive" : ""} whileTap={{ scale: 0.95 }}>Services</motion.li>
              </Link>
              <Link to="/about/">
                <motion.li  className={url==="/about/" ? "NavActive" : ""} whileTap={{ scale: 0.95 }}>About</motion.li>
              </Link>
              <Link whileTap={{ scale: 0.95 }} to="/contact/">
                <motion.li  className={url==="/contact/" ? "NavActive" : ""} whileTap={{ scale: 0.95 }}>Contact</motion.li>
              </Link>
            </ul>
          </div>
          <motion.div
            whileTap={{ scale: 0.97 }}
            className="SignIn"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Link to="/SignIn">Sign in</Link>
          </motion.div>
          <div
            onClick={(e) => {
              e.preventDefault();
              SetSideMenu(!SideMenu);
              console.log(SideMenu);
            }}
            className="NavMenu"
          >
            {<MenuIcon sx={{ fontSize: "30px" }} />}
          </div>
        </motion.div>
        {SideMenu && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ type: "spring" }}
            className="SideNav"
          >
            <div className="NavTitle">ElectroFix</div>
            <div
              onClick={() => {
                SetSideMenu(!SideMenu);
              }}
              style={{
                position: "absolute",
                right: "0",
                marginRight: "10px",
                color: "grey",
                top: "30px",
                cursor:"pointer"
              }}
            >
              <CloseIcon />
            </div>

            <ul className="SideNavList">
            <Link to="/" >
                <motion.li  
                onClick={() => {
                  SetSideMenu(!SideMenu);
                }}
                whileTap={{ scale: 0.95 }}>Home</motion.li>
              </Link>
            <Link to="/scope/" >
                <motion.li  
                onClick={() => {
                  SetSideMenu(!SideMenu);
                }}
                whileTap={{ scale: 0.95 }}>Scope</motion.li>
              </Link>
              <Link to="/services/">
                <motion.li 
                onClick={() => {
                  SetSideMenu(!SideMenu);
                }}
                whileTap={{ scale: 0.95 }}>Services</motion.li>
              </Link>
              <Link to="/about/">
                <motion.li 
                onClick={() => {
                  SetSideMenu(!SideMenu);
                }}
                whileTap={{ scale: 0.95 }}>About</motion.li>
              </Link>
              <Link whileTap={{ scale: 0.95 }} to="/contact/">
                <motion.li 
                onClick={() => {
                  SetSideMenu(!SideMenu);
                }}
                whileTap={{ scale: 0.95 }}>Contact</motion.li>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nabvar;

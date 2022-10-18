import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Nabvar() {
  const [SideMenu, SetSideMenu] = useState(false);

  // SideMenu &&
  // document.onClick(SetSideMenu(false)) ;

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
              <motion.a whileTap={{ scale: 0.95 }} href="/">
                <li>Projects</li>
              </motion.a>
              <motion.a whileTap={{ scale: 0.95 }} href="/">
                <li>Experience</li>
              </motion.a>
              <motion.a whileTap={{ scale: 0.95 }} href="/">
                <li>About</li>
              </motion.a>
              <motion.a whileTap={{ scale: 0.95 }} href="/">
                <li>Contact</li>
              </motion.a>
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
              <motion.a whileTap={{ scale: 0.95 }} href="/">
                <li>Projects</li>
              </motion.a>
              <motion.a whileTap={{ scale: 0.95 }} href="/">
                <li>Experience</li>
              </motion.a>
              <motion.a whileTap={{ scale: 0.95 }} href="/">
                <li>About</li>
              </motion.a>
              <motion.a whileTap={{ scale: 0.95 }} href="/">
                <li>Contact</li>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nabvar;

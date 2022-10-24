import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Nabvar() {
  const [SideMenu, SetSideMenu] = useState(false);
  // eslint-disable-next-line
  const [isUser, setUser] = useState(true);
  const [userDropdown, setUserDropdown] = useState(false);

  const location = useLocation();
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
          <div className="NavTitle">
            <a href="/">ElectroFix</a>
          </div>
          <div className="NavSecDiv">
            <ul className="NavList">
              <Link to="/">
                <motion.li
                  className={url === "/" ? "NavActive" : ""}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.li>
              </Link>
              <Link to="/scope/">
                <motion.li
                  className={url === "/scope/" ? "NavActive" : ""}
                  whileTap={{ scale: 0.95 }}
                >
                  Scope
                </motion.li>
              </Link>
              <Link to="/services/">
                <motion.li
                  className={url === "/services/" ? "NavActive" : ""}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                </motion.li>
              </Link>
              <Link to="/about/">
                <motion.li
                  className={url === "/about/" ? "NavActive" : ""}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.li>
              </Link>
              <Link whileTap={{ scale: 0.95 }} to="/contact/">
                <motion.li
                  className={url === "/contact/" ? "NavActive" : ""}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.li>
              </Link>
            </ul>
          </div>
          {!isUser ? (
            <motion.div
              className="SignIn"
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Link to="/SignIn">Sign in</Link>
            </motion.div>
          ) : (
            <motion.div className="NavUserDiv">
              <motion.div whileTap={{ scale: 0.97 }} className="userImg">
                <img src="/Assets/images/shehroz.jpeg" alt="" />
              </motion.div>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link to="/dashboard/">Shehroz</Link>
              </motion.div>
              <motion.div
                key="dropdown"
                whileTap={{ scale: 0.5 }}
                className="userDropdown"
                onClick={() => {
                  setUserDropdown(!userDropdown);
                }}
              >
                <ArrowDropDownIcon sx={{ fontSize: "18px" }} />
              </motion.div>
            </motion.div>
          )}

          <div
            onClick={(e) => {
              SetSideMenu(!SideMenu);
            }}
            className="NavMenu"
          >
            {<MenuIcon sx={{ fontSize: "26px" }} />}
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
                cursor: "pointer",
              }}
            >
              <CloseIcon />
            </div>

            <ul className="SideNavList">
              <Link to="/">
                <motion.li
                  onClick={() => {
                    SetSideMenu(!SideMenu);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.li>
              </Link>
              <Link to="/scope/">
                <motion.li
                  onClick={() => {
                    SetSideMenu(!SideMenu);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Scope
                </motion.li>
              </Link>
              <Link to="/services/">
                <motion.li
                  onClick={() => {
                    SetSideMenu(!SideMenu);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                </motion.li>
              </Link>
              <Link to="/about/">
                <motion.li
                  onClick={() => {
                    SetSideMenu(!SideMenu);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.li>
              </Link>
              <Link whileTap={{ scale: 0.95 }} to="/contact/">
                <motion.li
                  onClick={() => {
                    SetSideMenu(!SideMenu);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.li>
              </Link>
            </ul>
          </motion.div>
        )}

        {userDropdown && (
          <div className="userDropdownDiv">
            <ul className="userDropdownList">
              <Link whileTap={{ scale: 0.95 }} to="/dashboard/">
                <motion.li
                  onClick={() => {
                    setUserDropdown(!userDropdown);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Dashboard
                </motion.li>
              </Link>
              <Link whileTap={{ scale: 0.95 }} to="/dashboard/profile/">
                <motion.li
                  onClick={() => {
                    setUserDropdown(!userDropdown);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Profile
                </motion.li>
              </Link>
              <Link whileTap={{ scale: 0.95 }} to="/dashboard/orders/">
                <motion.li
                  onClick={() => {
                    setUserDropdown(!userDropdown);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Orders
                </motion.li>
              </Link>
              <Link whileTap={{ scale: 0.95 }} to="/dashboard/messages/">
                <motion.li
                  onClick={() => {
                    setUserDropdown(!userDropdown);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Messages
                </motion.li>
              </Link>
              <Link whileTap={{ scale: 0.95 }} to="/">
                <motion.li
                  onClick={() => {
                    setUserDropdown(!userDropdown);
                    setUser(!isUser);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Out
                </motion.li>
              </Link>
            </ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nabvar;

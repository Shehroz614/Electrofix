import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueueIcon from "@mui/icons-material/Queue";
import WorkIcon from "@mui/icons-material/Work";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useLocation, useNavigate } from "react-router-dom";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';
import { SignOut } from "../helpers/Auth";
import { useDispatch } from "react-redux";

function DashboardSidebar() {
  const [expand, setExpand] = useState(false);
  var width,optionDisplay, padding, iconSize;
  expand ? (width = "20%") : (width = (window.innerWidth>700)?"10%":"15%");
  !expand ? (optionDisplay = "none") : (optionDisplay = "");
  expand ? (padding = "20%") : (padding = "37%");
  !expand ? (iconSize = "30px") : (iconSize = "25px");
  const isAdmin= false;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () => {
    SignOut(dispatch);
    navigate("/");
  }

    
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
    console.log(url);
    // eslint-disable-next-line
  }, [location]);


  return (
    <motion.div
      initial={{ width: width }}
      animate={{ width: width }}
      className="DashboardSidebar"
    >
      {expand && (
        <div
          onClick={() => {
            setExpand(!expand);
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
          <CloseIcon sx={{ color: "white", fontSize: "14px" }} />
        </div>
      )}
      {!expand && (
        <div
          onClick={() => {
            setExpand(!expand);
          }}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            color: "grey",
            top: "30px",
            cursor: "pointer",
          }}
          className="iconExpand"
        >
          <MenuIcon sx={{ color: "white", fontSize: "14px" }} />
        </div>
      )}

      <motion.div 
      initial={{ paddingLeft: padding }}
      animate={{ paddingLeft: (window.innerWidth)>700 ? padding : "20%" }}
      className="options">
        <Link to="/dashboard/" className={url==="/dashboard/" ? "DashActive" : ""}>
          <div><DashboardIcon sx={{fontSize: (window.innerWidth)>700 ? iconSize : "20px"}}/></div>
          <motion.h3
          initial={{ display: optionDisplay }}
          animate={{ display: optionDisplay }}
          >Dashboard</motion.h3>
        </Link>
        <Link to="/dashboard/orders/"  className={url==="/dashboard/orders/" ? "DashActive" : ""}>
          <div><WorkIcon  sx={{fontSize: (window.innerWidth)>700 ? iconSize : "20px"}}/></div>
          <motion.h3
          initial={{ display: optionDisplay }}
          animate={{ display: optionDisplay }}
          >Orders</motion.h3>
        </Link>


        {!isAdmin && (
        <Link to="/dashboard/requests/" className={url==="/dashboard/requests/" ? "DashActive" : ""}>
          <div><QueueIcon  sx={{fontSize: (window.innerWidth)>700 ? iconSize : "20px"}}/></div>
          <motion.h3
          initial={{ display: optionDisplay }}
          animate={{ display: optionDisplay }}
          >Requests</motion.h3>
        </Link>
        )
      }  

{!isAdmin && (
        <Link to="/dashboard/messages/" className={url==="/dashboard/messages/" ? "DashActive" : ""}>
          <div><MailOutlineIcon  sx={{fontSize: (window.innerWidth)>700 ? iconSize : "20px"}}/></div>
          <motion.h3
          initial={{ display: optionDisplay }}
          animate={{ display: optionDisplay }}
          >Messages</motion.h3>
        </Link>
)}



{isAdmin && (
        <Link to="/dashboard/agents/"  className={url==="/dashboard/agents/" ? "DashActive" : ""}>
          <div><SupportAgentIcon  sx={{fontSize: (window.innerWidth)>700 ? iconSize : "20px"}}/></div>
          <motion.h3
          initial={{ display: optionDisplay }}
          animate={{ display: optionDisplay }}
          >Agents</motion.h3>
        </Link>
)}



{isAdmin && (
        <Link to="/dashboard/customers/"  className={url==="/dashboard/customers/" ? "DashActive" : ""}>
          <div><PeopleIcon  sx={{fontSize: (window.innerWidth)>700 ? iconSize : "20px"}}/></div>
          <motion.h3
          initial={{ display: optionDisplay }}
          animate={{ display: optionDisplay }}
          >Customers</motion.h3>
        </Link>
)}


        <Link to="/dashboard/profile/"  className={url==="/dashboard/profile/" ? "DashActive" : ""}>
          <div><PersonIcon sx={{fontSize: (window.innerWidth)>700 ? iconSize : "20px"}}/></div>
          <motion.h3
          initial={{ display: optionDisplay }}
          animate={{ display: optionDisplay }}
          >Profile</motion.h3>
        </Link>

        <div>
          <div onClick={handleSignOut}><ExitToAppIcon  sx={{fontSize: (window.innerWidth)>700 ? iconSize : "20px"}}/></div>
          <motion.h3
          onClick={handleSignOut}
          initial={{ display: optionDisplay }}
          animate={{ display: optionDisplay }}
          >Sign Out </motion.h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DashboardSidebar;

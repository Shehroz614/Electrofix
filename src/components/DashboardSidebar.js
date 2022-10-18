import React, { useState } from 'react'
import { motion } from 'framer-motion';
// import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function DashboardSidebar() {

    const [expand, setExpand] = useState(true);
    var width;
    expand ? (width = "20%") : (width = "9%");

  return (
    <motion.div
    initial={{width:width}}
    animate={{width:width}}
    className='DashboardSidebar'>
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
                cursor:"pointer"
              }}
            >
              <CloseIcon sx={{color:"white", fontSize:"14px"}}/>
            </div>
      
    </motion.div>
  )
}

export default DashboardSidebar

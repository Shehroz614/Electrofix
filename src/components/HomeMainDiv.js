import React from 'react'
import { motion } from "framer-motion";
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import "../css/Home.css";

function HomeMainDiv() {
  return (
    <div className="MainDiv">
        <div className="MainDiv2"></div>
        <motion.div 
        initial={{x:100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1}}
        className="MainDIvText">
            <h1 className='Title'>Electrofix</h1>
            <h1  className='MainHeading'>Everyday life,<br/> made simple.</h1>
            <span>Get services at your doorstep<br/>at one simple click</span>
            <motion.div 
            initial={{y:20,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1, delay:1}}
            className="MainDivButtons">
                <motion.div onClick={() => {window.open('https://www.android.com/','_blank')}} whileTap={{scale:"0.95"}} >
                    <AdbIcon sx={{color:"#30BE25"}} />
                    <span><span style={{fontSize:"10px"}}>Download for</span><br/>Android</span>
                </motion.div>
                <motion.div onClick={() => {window.open('https://www.apple.com/','_blank')}} whileTap={{scale:"0.95"}} >
                    <AppleIcon  />
                    <span><span style={{fontSize:"10px"}}>Download for</span><br/>Apple</span>
                </motion.div>
            </motion.div>
            </motion.div>
      </div>
  )
}

export default HomeMainDiv

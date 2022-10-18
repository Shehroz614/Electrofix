import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

function ThirdDiv() {

  const [isVisible, setIsVisible] = useState(false);

    const listenToScroll = () => {
      let heightToShow = 1100;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
  
      if (winScroll > heightToShow) {
        !isVisible && // to limit setting state only the first time
          setIsVisible(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
      // eslint-disable-next-line
    }, []);

  return (
    <div style={{minHeight:"600px"}}>
    { isVisible &&
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="MainThirdDiv"
    >
      <div className="MainThirdDiv1">
        <motion.div 
        initial={{ y:120 }}
        animate={{ y:0 }}
        transition={{ duration: 1, delay:1 }}
        >
          <img src=".\Assets\images\mechanic.jpg" alt="Repairer" />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay:2 }}
        className="TextDiv">
          <h2>Empowered 1+ million Captains</h2>
          <p>
            We've created opportunities for over a million people in the region
            to earn an income.
          </p>
        </motion.div>
      </div>

      <div className="MainThirdDiv1">
        <div className="MainThirdDiv2">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay:2 }}
          className="TextDiv">
            <h2>Simply happy Customers</h2>
            <p>We’re making life simple for millions of Customers</p>
          </motion.div>
          <motion.div
          initial={{ x:-200 }}
          animate={{ x:0 }}
          transition={{ duration: 1, delay:1 }}
          >
            <img src=".\Assets\images\happy-woman.jpg" alt="Happy Face" />
          </motion.div>
        </div>

        <div className="MainThirdDiv2">
          <motion.div
          initial={{ x:200 }}
          animate={{ x:0 }}
          transition={{ duration: 1, delay:1 }}
          >
            <img src=".\Assets\images\refugee.jpg" alt="Refugee" />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay:2 }}
          className="TextDiv">
            <h2>More than 700,000 refugees supported</h2>
            <p>We have supported thousands of refugee families with daily essentials.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
}
    </div>
  );
}

export default ThirdDiv;

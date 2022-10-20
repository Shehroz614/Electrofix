import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function FifthDiv() {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToShow = 1800;
    if(window.innerWidth<700)
    {
        heightToShow = 2400;
    }
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
    <div style={{ minHeight: "600px" }}>
      {isVisible && (
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="FifthDiv"
        >
          <div className="first">
            <div>
              <h2>Become a Service Provider</h2>
              <p>It's up to you! Start earning with Electrofix today.</p>
              <motion.button
              whileTap={{scale:0.95}}
              onClick={() => {window.open("/SignIn")}}
              >Sign Up</motion.button>
            </div>
          </div>
          <div className="second">
            <div>
              <h2>Join as a Customer</h2>
              <p>Join today and get services at your doorstep</p>
              <motion.button
              whileTap={{scale:0.95}}
              onClick={() => {window.open("/SignIn")}}
              >Sign Up</motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default FifthDiv;

import React from 'react'
import { motion } from "framer-motion";
import services from "../helpers/Services";
import { useState, useEffect } from 'react';

function ServicesDiv() {
    var x=0;

    const [isVisible, setIsVisible] = useState(false);

    const listenToScroll = () => {
      let heightToShow = 400;
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
    
      <div className="HomeSecDiv">
        { isVisible && (
        <div className="HomeSecDiv2">
          <motion.h1
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            One place for all your needs
          </motion.h1>
          <div className="Services">
            <div className="ServicesRow">
              {
              
              services.map((item, index) => {
                x=x+0.1;
                return (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: x}}
                    className="Service"
                    key = {index}
                  >
                    <img src={item.image} alt="Service" />
                    <div>
                      <span>{item.name}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
)}
      </div>
    
  )
}

export default ServicesDiv

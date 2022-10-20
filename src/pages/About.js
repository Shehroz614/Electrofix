import React from "react";
import "../css/About.css";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToShow = 300;
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
    <div className="About">
      <div className="About1">
        <h1>About Us</h1>
        <h3>Make Everyday life Simple</h3>
      </div>
      <div className="About2out">
        {isVisible && (
          <div className="About2">
            <motion.div
              initial={{ x: 600 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* <img src="/Assets/images/About.jpg" alt="" /> */}
            </motion.div>
            <motion.div
              initial={{ opacity:  0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay:window.innerWidth < 700 ? 0 : 1.5 }}
            >
              <h2 style={{ marginBottom: "50px" }}>
                One place for all your needs
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing
              </p>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default About;

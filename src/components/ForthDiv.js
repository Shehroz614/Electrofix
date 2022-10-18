import React from "react";
import "../css/Home.css";
import { motion } from "framer-motion";

function ForthDiv() {
  return (
    <div className="ForthDiv">
      <motion.div
      whileHover={{scale:1.02}}
       className="ForthDiv2">
        <div className="imageDiv">
          <img src=".\Assets\images\delivery.jpg"  alt=""/>
        </div>
        <div>
          <h3>FREE VISITS ON LARGE ORDERS</h3>
          <p>
            Get Free Shipping on all orders over RS 7500 and free returns to our
            returns Centre! Items are dispatched from the Centre and will arrive
            in 5-8 days.
          </p>
        </div>
      </motion.div>
      <motion.div
      whileHover={{scale:1.02}}
      className="ForthDiv2">
        <div className="imageDiv">
          <img src=".\Assets\images\customer-service.jpg"  alt="" />
        </div>
        <div>
          <h3>AMAZING CUSTOMER SERVICE</h3>
          <p>
            Our team is available all the time for your queries and help. You
            can contact us anytime through our email or social media handles. We
            will be more than happy to serve you.
          </p>
        </div>
      </motion.div>
      <motion.div 
      whileHover={{scale:1.02}}
      className="ForthDiv2">
        <div className="imageDiv">
          <img src=".\Assets\images\money.jpg" alt=""/>
        </div>
        <div>
          <h3>NO CUSTOMS OR DUTY FEES!</h3>
          <p>
            We pay these fees so you don’t have to! The total billed at checkout
            is the final amount you pay, inclusive of TAX, with no additional
            charges at the time of delivery!
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default ForthDiv;

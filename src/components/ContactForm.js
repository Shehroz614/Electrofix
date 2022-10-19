import React from 'react'
import { motion } from 'framer-motion'

function ContactForm() {
  return (
    <motion.div
    initial={{scale:0.5}}
    animate={{scale:1}}
    transition={{duration:0.5}}
    >
      <h2  style={{ fontWeight: "500", marginBottom: "60px" }}>Contact Us</h2>
      <div>
        <input type="text" name='name' placeholder='Full Name'></input>
        <input type="temail" name='email' placeholder='Email'></input>
        <textarea name='message' placeholder='Message' rows="7"></textarea>
        <motion.button
        whileTap={{scale:"0.95"}}
        >Submit</motion.button>
      </div>
    </motion.div>
  )
}

export default ContactForm

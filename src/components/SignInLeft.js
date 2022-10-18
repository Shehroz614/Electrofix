import React from 'react'
import Blob from './Blob'
import { motion } from 'framer-motion'

function SignInLeft() {
  return (
    <div className="SignInLeft">
        <Blob />
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="signInWelcome"
        >
          Welcome to our
          <br />
          Community
        </motion.h1>

        <motion.img
          whileHover={{ scale: 1.05 }}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="WelcomeImage"
          src="/Assets/images/businessman2.webp"
          alt="Businessman"
        />
      </div>
  )
}

export default SignInLeft

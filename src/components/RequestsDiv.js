import React from 'react'
import {Link} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import {motion} from "framer-motion"

function RequestsDiv() {
  return (
    <div className="RequestsDiv">
      <motion.div
        whileTap={{scale:0.98}}
       className="NewRequestButton" >
        <Link to="/dashboard/requests/new"><div><AddIcon sx={{fontSize:"25px"}}/>New Request</div></Link>
       </motion.div>
      <div className="ShowRequests"></div>
    </div>
  )
}

export default RequestsDiv

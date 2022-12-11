import React from 'react'
import {Link} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import {motion} from "framer-motion"

function RequestsDiv() {
  return (
    <div>
      <motion.div
        whileTap={{scale:0.98}}
       className="NewRequestButton" >
        <Link to="/dashboard/requests/new"><div><AddIcon sx={{fontSize:"25px"}}/>New Request</div></Link>
       </motion.div>
      <h1 style={{marginLeft:"auto",marginRight:"auto", textAlign:"center",paddingTop:"20%",marginTop:"0"}}>Requests</h1>
    </div>
  )
}

export default RequestsDiv

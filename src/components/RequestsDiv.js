import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import {motion} from "framer-motion"
import { get } from '../helpers/FetchApi';

function RequestsDiv() {

  const [orders, setOrders] = useState([]);
  const [ThisUser, setThisUser] = useState([])
const getOrders = async () => {
  const AllOrders = await get("http://localhost:5000/api/orders/");

  const user = await get("http://localhost:5000/api/auth/getuser");
  setThisUser(user);

  const userOrders = AllOrders.filter(function (order) {
    if (order.client._id === user._id  || order.agent._id === user._id  ) {
      return true; // skip
    }
    return false;
  });

  console.log(userOrders)

  setOrders(userOrders.reverse());

}


useEffect(() => {
    
    getOrders();
    // eslint-disable-next-line
}, [])


  return (
    <div className="RequestsDiv">
      <motion.div
        whileTap={{scale:0.98}}
       className="NewRequestButton" >
        <Link to="/dashboard/requests/new"><div><AddIcon sx={{fontSize:"25px"}}/>New Request</div></Link>
       </motion.div>
       <h2 style={{textAlign: "center"}}>Requests</h2>
      <div className="ShowRequests">
        <div className="request">
        <div>Client</div>
        <div>Agent</div>
        <div>Title</div>
        <div>Date</div>
        <div>Status</div>
        <div>Payment</div>
        <div></div>
        </div>
        {
        orders.map((order, index) => {
          return (
            <div className="request" key={index}>
              <div>{order.client.fname}</div>
              <div>{order.agent.fname}</div>
              <div>{order.title}</div>
              <div>{order.requestDate.slice(0,10)}</div>
              <div>{order.status}</div>
              <div>{order.payment}</div>
              <div>
                {ThisUser.userType!=="agent" ? (
              <motion.button
                  className="RequestCancelButton"
                  whileTap={{ scale: 0.9 }}
                >
                  Cancel
                </motion.button>)
                :
                (
                  <motion.button
                  className="RequestCancelButton"
                  whileTap={{ scale: 0.9 }}
                >
                  Reject
                </motion.button>
                )
              }

              </div>
              
              </div>
          );

        })
        }

      </div>
    </div>
  )
}

export default RequestsDiv

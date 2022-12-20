import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import {motion} from "framer-motion"
import { get, patch } from '../helpers/FetchApi';
import RequestPreviewModal from './RequestPreviewModal';

function RequestsDiv() {

  const [orders, setOrders] = useState([]);
  const [ThisUser, setThisUser] = useState([])
  const [open, setOpen] = useState(false);
  const [CurRequest, setCurRequest] = useState(null);

const getOrders = async () => {

  const AllOrders = await get("http://localhost:5000/api/orders/");
  const user = await get("http://localhost:5000/api/auth/getuser");
  setThisUser(user);

  const userOrders = AllOrders.filter(function (order) {
    if (order.client._id === user._id  || order.agent._id === user._id  ) {
      if(order.status!=="working"){
        return true; // skip
        }
    }
    return false;
  });
  setOrders(userOrders.reverse());
}


const cancelOrder = async (id) => {
    await patch(`http://localhost:5000/api/orders/update/${id}`, {status : "cancelled"});
    getOrders();
}
const rejectOrder = async (id) => {
  await patch(`http://localhost:5000/api/orders/update/${id}`, {status : "rejected"});
  getOrders();
}

const acceptOrder = async (id) => {
  await patch(`http://localhost:5000/api/orders/update/${id}`, {status : "working"});
  getOrders();
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
            <div className="request" 
            onClick={() => {
              setCurRequest(order);
              setOpen(!open);
            }}
            key={index} 
            >
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurRequest(order);
                    cancelOrder(order._id);
                  }}
                  disabled = {order.status!=="pending" ? true : false}
                  whileTap={{ scale: 0.9 }}
                >
                  Cancel
                </motion.button>)
                :
                (<div>
                  <motion.button
                  className="RequestCancelButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurRequest(order);
                    acceptOrder(order._id);
                  }}
                  disabled = {order.status!=="pending" ? true : false}
                  whileTap={{ scale: 0.9 }}
                >
                  Accept
                </motion.button>
                  <motion.button
                  className="RequestCancelButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurRequest(order);
                    rejectOrder(order._id);
                  }}
                  disabled = {order.status!=="pending" ? true : false}
                  whileTap={{ scale: 0.9 }}
                >
                  Reject
                </motion.button>
                </div>
                )
              }

              </div>
              
              </div>
          );

        })
        }

      </div>
      {open && (<RequestPreviewModal open={open} setOpen={setOpen} request={CurRequest} />)}
    </div>
  )
}

export default RequestsDiv

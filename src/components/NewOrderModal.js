import React from 'react'
import { Box, Modal, Typography } from "@mui/material";
import { post, get } from '../helpers/FetchApi';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function NewOrderModal(props) {

    const [values, setValues] = useState(null);
    const navigate = useNavigate();

    const handleClose = () => {
        props.setOpen(false);
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    

    const PlaceOrder = async () => {

        const user = await get("http://localhost:5000/api/auth/getuser");

        const url = "http://localhost:5000/api/orders/new/request/";
        const data = {
            client : user._id,
            agent : props.agent,
            title : values.Title,
            discription : values.Description,
            payment : values.Amount,
            expectedDeliveryDate : values.DeliveryDate,
            status : "pending"
        }
        console.log(data)
        const response = await post(url, data);
        console.log(response);
        handleClose();
        navigate("/dashboard/requests");

    }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="NewOrderModalDiv">
        <Box >
          <div className="OrderModalTitle">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Order
          </Typography> </div>
          <div className="OrderModalDetails">
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A little description here
          </Typography> */}
          <input onChange={handleChange} name="Title" placeholder='Title'></input>
          <textarea onChange={handleChange} name="Description" placeholder='Description'></textarea>
          <input onChange={handleChange} name="Amount" placeholder='Amount' type="number"></input>
          <input onChange={handleChange} name="DeliveryDate" placeholder='Date to be delivered' type="date"></input>
          </div>
          <div className="OrderModalButtons" >
            <div><button onClick={PlaceOrder}>Place Order</button></div>
           <div><button onClick={handleClose}>Cancel</button></div> 
          </div>
        </Box>
        </div>
      </Modal>
    </div>
  )
}

export default NewOrderModal

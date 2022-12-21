import React from 'react'
import { Box, Modal, Typography } from "@mui/material";

function RequestPreviewModal(props) {

    const handleClose = () => {
        props.setOpen(false);
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
            Request
          </Typography> </div>
          <div className="OrderModalDetails">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <h3>Title :{"  "+props.request.title}</h3>
          </Typography>
          </div>

          <div className="ReqModalDesc" >
            <div><h3>Client : </h3>&nbsp;{"  "+props.request.client.fname+" "+props.request.client.lname}</div>
            <div><h3>Agent : </h3>&nbsp;{"  "+props.request.agent.fname+" "+props.request.agent.lname}</div>
            <div><h3>Description : </h3>&nbsp;{"  "+props.request.discription}</div>
            <div><h3>Amount : </h3>&nbsp;{"  "+props.request.payment+" Rs"}</div>
            <div><h3>status : </h3>&nbsp;{"  "+props.request.status}</div>
          </div>
        </Box>
        </div>
      </Modal>
    </div>
  )
}

export default RequestPreviewModal

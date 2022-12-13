import React from 'react'
import { Box, Modal, Typography } from "@mui/material";

function NewOrderMessageModal(props) {

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
            New Message
          </Typography> </div>
          <div className="OrderModalDetails">
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A little description here
          </Typography> */}
          <textarea placeholder='Message'></textarea>
          </div>
          <div className="OrderModalButtons" >
            <div><button>Send Message</button></div>
           <div><button onClick={handleClose}>Cancel</button></div> 
          </div>
        </Box>
        </div>
      </Modal>
    </div>
  )
}

export default NewOrderMessageModal

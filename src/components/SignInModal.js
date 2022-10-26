
import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import "../css/App.css"




function SignInModal(props) {
 
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
        <div className="ErrorDiv">
        <Box >
          <div className="ErrorTitle">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography> </div>
          <div className="ErrorDesc">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.desc}
          </Typography></div>
        </Box>
        </div>
      </Modal>
    </div>
  );
}

export default SignInModal;

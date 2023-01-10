import { Box, Modal, Typography } from "@mui/material";
import { get, post, patch } from "../helpers/FetchApi";
import React, { useState } from "react";

function NewOrderMessageModal(props) {
  const [text, setText] = useState("");

    const handleClose = () => {
        props.setOpen(false);
    }

    const HandleChange = (e) => {
      setText(e.target.value);
    };

    const sendMessage = async () => {

      if (text !== "") {
        const user = await get("http://localhost:5000/api/auth/getuser");
        var chat = await get(`http://localhost:5000/api/chats/find/${user._id}/${props.agent}`);
        
        if(!Array.isArray(chat) || chat.length <= 0){
          const newChat = {
            members : [user._id , props.agent]
          }
          chat = await post("http://localhost:5000/api/chats/", newChat);
        }
        
        const msg = {
          SenderId: user._id,
          ChatId: Array.isArray(chat) ? chat[0]._id : chat._id,
          text: text,
        };
        await post("http://localhost:5000/api/message/", msg);

        const UpData = {
          lmsg : text
        };
        chat = await patch(`http://localhost:5000/api/chats/update/${msg.ChatId}`, UpData);
        console.log(chat)
        
      }
      setText("");
      handleClose();
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
          <textarea placeholder='Message' onChange={HandleChange} value={text}></textarea>
          </div>
          <div className="OrderModalButtons" >
            <div><button onClick={sendMessage}>Send Message</button></div>
           <div><button onClick={handleClose}>Cancel</button></div> 
          </div>
        </Box>
        </div>
      </Modal>
    </div>
  )
}

export default NewOrderMessageModal

import React, { useState } from "react";
import chats from "../helpers/Chats";
import { motion } from "framer-motion";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CircleIcon from '@mui/icons-material/Circle';

function MessagesDiv() {

  const [chatName, setChatName] = useState("");

  // const [clicked, setClicked] = useState(false);
  //   const HandleClick = (e) => {
  //   setClicked(!clicked);
  // };

  return (
    <div className="MessagesDiv">
      <h2 style={{ textAlign: "center", marginTop: 0 }}>Messages</h2>
      <div className="Chatbox">
        <div className="chats">
          <h2 style={{ marginLeft: "10px" }}>Chats</h2>
          <div className="chatlist">
            {chats.map((chat, index) => {
              return (
                <motion.div key={index} onClick={() => {setChatName(chat.name)}} 
                 whileTap={{scale:0.99}}
                className={chat.name===chatName ? "ActiveChat chat" : "chat"}>
                  <div className="chatimagediv">
                    <img src="/Assets/images/shehroz.jpeg" alt="" />
                  </div>
                  <div className="chatdetailsdiv">
                    <span style={{"display":"flex","alignItems":"center","gap":"2px"}}><h5 style={{margin: 0,marginBottom: "4px", fontWeight: "600"}} > {chat.name} </h5><span><CircleIcon sx={{"fontSize":"10px", "color":"green"}} /></span></span>
                    <span style={{ fontSize: "13px" }}>{chat.lmsg}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="messages">
          <div style={{"display":"flex","alignItems":"center"}}><h3 style={{"fontWeight":"500"}}>{chatName}</h3><span><CircleIcon sx={{"fontSize":"10px", "color":"green"}} /></span></div>
          <div className="ChatMessages"></div>
          <div className="TypeMessage">
            <div className="textarea">
              <div style={{"fontSize": "12px","marginTop": "-5px", "color": "white", "display": "flex"}}>
                <span>Attachment: </span>
                <div>&nbsp;File Name<span></span></div>
              </div>
              <textarea className="MessageText"></textarea>
              </div>
            <div className="MessageOptions">
              <div className="MessageAttachments">
                <div className="emojiIcon"><EmojiEmotionsIcon sx={{"color": "yellow", "fontSize" : "22px"}} /></div>
                <div className="AttachIcon"><AttachmentIcon sx={{"color": "#042241", "transform": "rotate(45deg)", "fontSize" : "25px"}} /></div>
              </div>
              <div><motion.button whileTap={{ scale: 0.98 }}>Send</motion.button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesDiv;

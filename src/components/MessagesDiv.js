import React, { useState } from "react";
import chats from "../helpers/Chats";
import { motion } from "framer-motion";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachmentIcon from '@mui/icons-material/Attachment';

function MessagesDiv() {

  const [chatName, setChatName] = useState("");

  // const [clicked, setClicked] = useState(false);
  //   const HandleClick = (e, ) => {
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
                    <h5 style={{margin: 0,marginBottom: "4px", fontWeight: "600"}} > {chat.name} </h5>
                    <span style={{ fontSize: "13px" }}>{chat.lmsg}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="messages">
          <h2>Messages</h2>
          <div className="ChatMessages"></div>
          <div className="TypeMessage">
            <textarea className="MessageText"></textarea>
            <div className="MessageOptions">
              <div className="MessageAttachments">
                <div className="emojiIcon"><EmojiEmotionsIcon sx={{"color": "yellow", "fontSize" : "22px"}} /></div>
                <div className="AttachIcon"><AttachmentIcon sx={{"color": "#042241", "transform": "rotate(45deg)", "fontSize" : "24px"}} /></div>
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

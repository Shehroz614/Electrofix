import React from "react";
import chats from "../helpers/Chats";
import { motion } from "framer-motion";

function MessagesDiv() {
  const HandleClick = () => {};

  return (
    <div className="MessagesDiv">
      <h2 style={{ textAlign: "center", marginTop: 0 }}>Messages</h2>
      <div className="Chatbox">
        <div className="chats">
          <h2 style={{ marginLeft: "10px" }}>Chats</h2>
          <div className="chatlist">
            {chats.map((chat, index) => {
              return (
                <div className="chat" key={index} onClick={HandleClick}>
                  <div className="chatimagediv">
                    <img src="/Assets/images/shehroz.jpeg" alt="" />
                  </div>
                  <div className="chatdetailsdiv">
                    <h5 style={{margin: 0,marginBottom: "4px", fontWeight: "600"}} > {chat.name} </h5>
                    <span style={{ fontSize: "13px" }}>{chat.lmsg}</span>
                  </div>
                </div>
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
              <motion.button whileTap={{ scale: 0.98 }}>Send</motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesDiv;

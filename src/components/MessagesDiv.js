import React, { useState } from "react";
// import chats from "../helpers/Chats";
import { motion } from "framer-motion";
// import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect } from "react";
import { get, post, patch } from "../helpers/FetchApi";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { useRef } from "react";
import {io} from "socket.io-client"

function MessagesDiv() {
  const [text, setText] = useState("");
  const [user, setUser] = useState([]);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [curChat, setCurChat] = useState({});
  const [OnlineUsers, setOnlineUsers] = useState([]);
  const [sendMsg, setSendMsg] = useState(null);
  const [recMsg, setRecMsg] = useState(null);
  const scroll = useRef();
  const socket = useRef();

  const getChats = async () => {
    const thisuser = await get("http://localhost:5000/api/auth/getuser");
    const chats = await get("http://localhost:5000/api/chats/");
    setUser(thisuser);

    chats.map(async (chat) => {
      const sender = chat.members.filter(function (member) {
        if (member._id !== thisuser._id) {
          return true; // skip
        }
        return false;
      });
      // console.log("this is sender : ",sender)
      chat.Sender = sender[0]; 
      return {};
    });
    
    setChats(chats);
    setCurChat(chats[0])
  };

  const getMessages = async () => {
    const msgs = await get(`http://localhost:5000/api/message/${curChat._id}`);
    setMessages(msgs);
  };

  const HandleChange = (text) => {
    setText(text);
  };


  const sendMessage = async () => {
    if (text !== "") {
      const msg = {
        SenderId: user._id,
        ChatId: curChat._id,
        text: text,
      };
      await post("http://localhost:5000/api/message/", msg);

      const UpData = {
        lmsg : text
      };
      await patch(`http://localhost:5000/api/chats/update/${curChat._id}`, UpData);
      getChats();
      getMessages();

      const recieverId = curChat.Sender._id;
      setSendMsg({msg, recieverId});

    }
    setText("");
  };

  useEffect(() => {
        socket.current = io("http://localhost:8800");
        socket.current.emit("new-user-add", user._id);
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
            // console.log(users);
        })
  }, [user])


  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
     setRecMsg(data);
    })
 },[])

  useEffect(() => {
       
      if(sendMsg !== null){
        socket.current.emit("send-message", sendMsg);
      }
  }, [sendMsg])

useEffect(() => {
    if(recMsg !== null){
      getChats();
      getMessages();
      console.log("message recieved", recMsg)
  }
  // eslint-disable-next-line
}, [recMsg])

  
  useEffect(() => {
    getChats();
    getChats();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line
  }, [curChat]);

  

  useEffect(() => {
    scroll.current?.scrollIntoView({behaviour: "smooth"})
  })

  return (
    <div className="MessagesDiv">
      <h2 style={{ textAlign: "center", marginTop: 0 }}>Messages</h2>
      <div className="Chatbox">
        <div className="chats">
          <h2 style={{ marginLeft: "10px" }}>Chats</h2>
          <div className="chatlist">
            {chats.map((chat, index) => {
              return (
                <motion.div
                  key={index}
                  onClick={() => {
                    setCurChat(chat);
                  }}
                  whileTap={{ scale: 0.99 }}
                  className={
                    chat.Sender.fname === curChat?.Sender?.fname
                      ? "ActiveChat chat"
                      : "chat"
                  }
                >
                  <div className="chatimagediv">
                    <img src="/Assets/images/shehroz.jpeg" alt="" />
                  </div>
                  <div className="chatdetailsdiv">
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <h5
                        style={{
                          margin: 0,
                          marginBottom: "4px",
                          fontWeight: "600",
                        }}
                      >
                        {" "}
                        {chat.Sender.fname}{" "}
                      </h5>
                      <span>
                        <CircleIcon sx={{ fontSize: "10px", color: "green" }} />
                      </span>
                    </span>
                    <span style={{ fontSize: "13px" }}>{chat.lmsg}</span>
                    <span style={{ fontSize: "10px", display : "block" , textAlign:"right"}}>{format(chat.updatedAt)}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="messages">
          <div style={{ display: "flex", alignItems: "center", height: "12%" }}>
            <h3 style={{ fontWeight: "500" }}>{curChat?.Sender?.fname}</h3>
            <span>
              <CircleIcon sx={{ fontSize: "10px", color: "green" }} />
            </span>
          </div>
          <div className="ChatMessages">
            {Array.isArray(messages) &&
              messages?.map((msg, index) => {
                return (
                  <div
                    key={index}
                    ref={scroll}
                    className={
                      msg.SenderId === user._id ? "myMessage" : "otherMessage"
                    }
                  >
                    <span>{msg.text}</span>
                    <span>{format(msg.createdAt)}</span>
                  </div>
                );
              })}
          </div>
          <div className="TypeMessage">
            <div className="AttachIcon">
              <AttachmentIcon
                sx={{
                  color: "#042241",
                  transform: "rotate(45deg)",
                  fontSize: "32px",
                }}
              />
            </div>
            <div className="textarea">
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "-5px",
                  color: "white",
                  display: "flex",
                }}
              >
                <span style={{"marginLeft":"20px"}}>Attachment: </span>
                <div>
                  &nbsp;File Name<span></span>
                </div>
              </div>
              <InputEmoji
                className="MessageText"
                onChange={HandleChange}
                value={text}
                onEnter={sendMessage}
                cleanOnEnter
              />
              {/* <textarea className="MessageText" onChange={HandleChange} value={text} /> */}
            </div>
            {/* <div className="MessageOptions">
              <div className="MessageAttachments">
                <div className="emojiIcon"><EmojiEmotionsIcon sx={{"color": "yellow", "fontSize" : "22px"}} /></div>
                <div className="AttachIcon"><AttachmentIcon sx={{"color": "#042241", "transform": "rotate(45deg)", "fontSize" : "25px"}} /></div>
              </div>
              <div><motion.button whileTap={{ scale: 0.98 }} onClick={sendMessage}>Send</motion.button></div>
            </div> */}
            <div>
              <motion.button
                className="sendButton"
                whileTap={{ scale: 0.98 }}
                onClick={sendMessage}
              >
                Send
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesDiv;

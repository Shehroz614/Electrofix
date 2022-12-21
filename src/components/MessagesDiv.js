import React from 'react'
import chats from '../helpers/Chats'

function MessagesDiv() {
  return (
    <div className='MessagesDiv'>
      <h2 style={{textAlign: "center", marginTop:0}}>Messages</h2>
      <div className='Chatbox'>
        <div className='chats'>
<h2 style={{"marginLeft": "10px"}}>Chats</h2>
<div className='chatlist'>
{
  chats.map((chat, index) => {
    return (<div className='chat' key={index}>
      <div className='chatimagediv'>
      <img src="/Assets/images/shehroz.jpeg" alt="" />
      </div>
      <div className='chatdetailsdiv'>
        <h5 style={{"margin": 0, "marginBottom": "4px","fontWeight":"600"}}>{chat.name}</h5>
        <span style={{"fontSize": "13px"}}>{chat.lmsg}</span>
      </div>
    </div>)
  })
}
</div>
        </div>
        <div className='messages'>
        <h2>Messages</h2>
        </div>

      </div>
    </div>
  )
}

export default MessagesDiv

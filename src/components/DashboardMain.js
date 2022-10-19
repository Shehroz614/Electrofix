import { Routes, Route } from "react-router-dom";
import React from 'react'
import DashboardDiv from "./DashboardDiv.js"
import RequestsDiv from "./RequestsDiv.js"
import OrdersDiv from "./OrdersDiv.js"
import MessagesDiv from "./MessagesDiv.js"
import ProfileDiv from "./ProfileDiv.js"
import AgentsDiv from "./AgentsDiv"
import CustomersDiv from "./CustomersDiv"

function DashboardMain() {
  return (
    <div className='DashboardMain'>
      
        <Routes>
          <Route exact path="/" element={<DashboardDiv/>} ></Route>;
          <Route exact path="/requests/" element={<RequestsDiv/>} ></Route>;
          <Route exact path="/orders/" element={<OrdersDiv/>} ></Route>;
          <Route exact path="/messages/" element={<MessagesDiv/>} ></Route>;
          <Route exact path="/profile/" element={<ProfileDiv/>} ></Route>;
          <Route exact path="/agents/" element={<AgentsDiv/>} ></Route>;
          <Route exact path="/customers/" element={<CustomersDiv/>} ></Route>;
        </Routes>
    
    </div>
  )
}

export default DashboardMain
